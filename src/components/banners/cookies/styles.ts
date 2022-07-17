import styled from 'styled-components';
import { transparentize } from 'polished';
import { PUITheme, ThemeMode } from '../../../utils/types';

export const StyledCookiesContainer = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
}>`
  align-items: center;
  background-color: ${(props: any): string => {
    return transparentize(0.4, props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900);
  }};
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  width: 100%;

  .cookiesModalPaper {
    max-width: 50%;
    min-width: 300px;
  }

  .cookiesModalActions {
    align-items: flex-end;
    display: flex;
    margin-top: 24px;

    & > button:first-child {
      margin-right: 24px;
    }
  }

  .cookiesModalShortDescription {
    &Text {
      color: ${(props: any) =>
        props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
    }
  }

  .cookiesModalDetailedViewButton {
    background: none;
    border: none;
    cursor: pointer;
    margin: 0;
    margin-left: auto;
    padding: 0;

    &Text {
      color: ${(props: any) =>
        props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.primary500};
    }
  }
`;

export const StyledCookieEntry = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
}>`
  margin-bottom: 24px;

  .cookieEntryTitle {
    margin-bottom: 8px;

    &Text {
      color: ${(props: any) =>
        props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
    }
  }

  .cookieEntryDescription {
    margin-bottom: 12px;

    &Text {
      color: ${(props: any) =>
        props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
    }
  }

  .cookieEntryRadio {
    display: flex;

    & > * {
      margin-right: 24px;
    }
  }
`;
