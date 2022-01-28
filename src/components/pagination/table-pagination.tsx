import * as React from 'react';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { Text, Icon, SelectInput, Button } from 'components';
import { usePagination } from './usePagination';
import { StyledPagination } from './styles';

interface PaginationOption {
  label: string;
  value: number;
}

export type TablePaginationProps = {
  [key: string]: any;
  count?: number;
  rowsPerPage: number;
  page: number;
  disabled?: boolean;
  contentBeforeSelect?: string;
  rowsPerPageOptions?: any;
  onChangePage: (page: number | PaginationOption) => void;
  onChangeRowsPerPage: any;
  locales?: { 
    itemsPerPage: string;
    displayingItems: (rangeStart: number, rangeEnd: number, count: number ) => string;
    currentPage: (currentPage: number, allPages: number) => string
  }
} & React.HTMLAttributes<HTMLDivElement>;

const defaultOptions = [
  { label: '12', value: 12 },
  { label: '24', value: 24 },
  { label: '36', value: 36 },
  { label: '48', value: 48 },
];

const additionStyles = () => ({
  valueContainer: () => ({
    padding: 0,
    justifyContent: 'center',
  }),
  control: () => ({
    minHeight: '48px',
    padding: '0 5px',
  }),
  dropdownIndicator: () => ({
    padding: 0,
    width: '16px',
  }),
  option: () => ({
    paddingTop: '5px',
    paddingBottom: '5px',
  }),
});

export const TablePagination = ({
  count = 150,
  rowsPerPage = 12,
  page = 0,
  disabled = false,
  rowsPerPageOptions = defaultOptions,
  onChangeRowsPerPage,
  onChangePage,
  className,
  locales,
  ...otherProps
}: TablePaginationProps): JSX.Element => {
  const [isFirst, isLast, pagesAmount] = usePagination({ page, count, rowsPerPage });
  const from = page * rowsPerPage + 1;
  const to = !isLast ? rowsPerPage * page + Number(rowsPerPage) : count;
  const pagesOptions = [...Array(pagesAmount)].map((_, index) => ({ value: index, label: index + 1 }));

  const rangeStart = count > 0 ? from : 0;
  const rangeEnd = to;

  const displayingItemsLabel = `Displaying ${rangeStart}-${rangeEnd} of ${count} items`;
  const currentPageLabel = `${page + 1} of ${pagesAmount} pages`;

  const theme = useTheme();
  const { mode } = useMode();

  const rowsPerPageHandler = (option: PaginationOption): void => onChangeRowsPerPage(option.value);

  return (
    <StyledPagination mode={mode} theme={theme} className={cx('pagination', className)} {...otherProps}>
      <div className="paginationSection">
        <Text
          size={theme.typography.sizes.m}
          weight={theme.typography.weights.light}
          color={theme.colors.base900}
          className="paginationText"
        >
          {locales?.itemsPerPage || 'Items per page'}
        </Text>
        <SelectInput
          options={rowsPerPageOptions}
          className="paginationSelect"
          id="rowsPerPage"
          name="rowsPerPage"
          isSearchable={false}
          styles={additionStyles()}
          isDisabled={disabled}
          onChange={rowsPerPageHandler}
          value={rowsPerPageOptions.find((option) => Number(option.value) === Number(rowsPerPage))}
        />
        <Text size={theme.typography.sizes.m} color={theme.colors.base900} className="paginationText">
          {locales?.displayingItems(rangeStart, rangeEnd, count) || displayingItemsLabel}
        </Text>
      </div>
      <div className="paginationSection">
        <Text size={theme.typography.sizes.m} color={theme.colors.base900} className="paginationText">
          {locales?.currentPage(page + 1, pagesAmount) || currentPageLabel}
        </Text>
        <Button
          className="paginationButton"
          disabled={isFirst || disabled}
          iconLeft={Icon.icons.chevronLeft}
          iconClassName={cx('paginationButtonIcon', 'paginationButtonIconNoMargin')}
          onClick={(): void => {
            onChangePage(page - 1);
          }}
        />
        <SelectInput
          options={pagesOptions}
          className="paginationSelect"
          id="page"
          name="page"
          isSearchable={false}
          styles={additionStyles()}
          isDisabled={disabled}
          onChange={(option): void => onChangePage(option.value)}
          value={pagesOptions.find((option) => Number(option.value) === Number(page))}
        />
        <Button
          className="paginationButton"
          disabled={isLast || disabled}
          iconRight={Icon.icons.chevronRight}
          iconClassName={cx('paginationButtonIcon', 'paginationButtonIconNoMargin')}
          onClick={(): void => {
            onChangePage(page + 1);
          }}
        />
      </div>
    </StyledPagination>
  );
};
