import { styled } from 'linaria/react';
import { PUITheme, ThemeMode } from 'utils/types';

export const StyledWizard = styled.div<{
  mode: ThemeMode;
  theme: PUITheme;
  disabled: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .wizzardStep {
    display: flex;
    flex-grow: 1;
    position: relative;

    &Box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      flex-grow: 1;

      &One {
        display: flex;
        width: 100%;

        &Line {
          display: flex;
          flex-grow: 1;
          border-top: 4px solid ${(props: any): string => props.theme.colors.base700};
          margin-top: 10px;
        }

        &CurrStep {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          color: ${(props: any): string => props.theme.colors.base100};
          background-color: ${(props: any): string => props.theme.colors.base700};
        }
      }
      &Two {
        position: absolute;
        top: 20px;
        width: max-content;
      }

      &CurrTitle {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        color: ${(props: any): string => props.theme.colors.base700};
        transform: translate(calc(50% - 12px));
      }
    }

    &Active {
      .wizzardStepBoxOneCurrStep {
        background-color: ${(props: any): string => props.theme.colors.primary500};
      }
      .wizzardStepBoxCurrTitle {
        color: ${(props: any): string => props.theme.colors.primary500};
      }
      .wizzardStepBoxOneLine {
        border-top: 4px solid ${(props: any): string => props.theme.colors.primary500};
      }
    }

    &Passed {
      .wizzardStepBoxOneCurrStep {
        background-color: ${(props: any): string => props.theme.colors.success};
      }
      .wizzardStepBoxCurrTitle {
        color: ${(props: any): string => props.theme.colors.success};
      }
      .wizzardStepBoxOneLine {
        border-top: 4px solid ${(props: any): string => props.theme.colors.success};
      }
    }
    &First {
      flex-grow: 0;
      .wizzardStepBoxOne {
        justify-content: flex-end;
      }
    }
  }
`;
