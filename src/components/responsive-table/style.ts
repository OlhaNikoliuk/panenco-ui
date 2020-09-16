import { styled } from 'linaria/react';
import { transparentize } from 'polished';
import { ThemeMode } from 'utils/types';

export const Styles = styled.div`
  width: 100%;
  .table {
    border-spacing: 0;
    width: 100%;

    &Cell {
      color: ${(props: any): string =>
        props.mode === ThemeMode.light ? props.theme.colors.dark : props.theme.colors.light};
      line-height: 1.3;
      min-height: 24px;
      overflow: hidden;
      padding: 12px 24px;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;

      &:not(:first-child) {
        padding-left: 0;
      }

      &ButtonIcon {
        margin-right: 12px;
      }
    }

    &Header {
      &Button {
        background: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        margin-left: 5px;

        &Disabled {
          cursor: auto;
        }
      }

      &Content {
        display: flex;
        flex-direction: column;
        margin-left: 4px;
      }

      &Text {
        color: ${(props: any): string =>
          props.mode === ThemeMode.light ? props.theme.colors.dark : props.theme.colors.light};
        font-weight: ${(props: any): string => props.theme.typography.weights.bold};
      }

      &Text:hover {
        color: ${(props: any): string => props.theme.colors.accent500};
      }

      &Icon {
        color: ${(props: any): string => props.theme.colors.secondary};
        cursor: pointer;
        height: 10px;
        width: 10px;

        &Active {
          color: ${(props: any): string => props.theme.colors.accent500};
        }
      }
    }

    &Body {
      &Row {
        position: relative;
        vertical-align: center;
      }
    }

    &Hidden {
      &Cell {
        padding: 12px 24px 12px 48px;

        &Content {
          display: flex;
          flex-direction: column;

          &:not(:last-child) {
            margin-bottom: 12px;
          }

          &Label {
            color: ${(props: any): string =>
              props.mode === ThemeMode.light ? props.theme.colors.dark : props.theme.colors.light};
            font-weight: ${(props: any): string => props.theme.typography.weights.bold};
            line-height: 14px;
          }

          &Text {
            color: ${(props: any): string =>
              props.mode === ThemeMode.light ? props.theme.colors.dark : props.theme.colors.light};
            line-height: 20px;
            margin-top: 4px;
          }
        }
      }
    }
  }

  @keyframes iconOpen {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }

  .tableBodyRow:nth-of-type(4n + 1) {
    background-color: ${(props: any): string =>
      transparentize(0.6, props.mode === ThemeMode.light ? props.theme.colors.border : props.theme.colors.secondary)};
  }

  .tableBodyRow:nth-of-type(4n + 2) {
    background-color: ${(props: any): string =>
      transparentize(0.6, props.mode === ThemeMode.light ? props.theme.colors.border : props.theme.colors.secondary)};
  }

  @keyframes iconClose {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .animationIconOpen {
    animation-name: iconOpen;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  .animationIconClose {
    animation-name: iconClose;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
`;