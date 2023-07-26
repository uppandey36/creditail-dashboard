import styled from 'styled-components'
import {COLORS} from '../static/constants/utilsConstants.tsx'

export const MainSection = styled.div`
    height: calc(100vh - 73px);
    overflow-y: scroll;
`

export const ModalChildWrapper = styled.div`
    width: 656px;
    border-radius: 8px;
    background: ${COLORS.white};

    .flex {
        display: flex;
    }

    .pd24 {
        padding: 24px;
    }

    .pd16 {
        padding: 16px;
    }

    .pd1014 {
        margin: 10px 14px;
        height: 40px;
    }

    .ph14 {
        padding: 0 14px ;
    }

    .justify-center {
        justify-content: center;
    }

    .align-center {
        align-items: center;
    }

    .justify-between {
        justify-content: space-between;
    }

    .heder-section {
        width: 100%;
    }

    .border {
        border: 1px solid ${COLORS.docBorder};
        box-shadow: 0px 1px 2px 0px ${COLORS.boxShadowColor};
        border-radius: 8px;
    }

    .border-right {
        border-right: 1px solid ${COLORS.docBorder};
    }

    .doc-icon {
        border: 1px solid ${COLORS.docBorder};
        padding: 12px;
        width: 24px;
        height: 24px;
        border-radius: 10px;
        margin-right: 16px;
    }

    .doc-header {
        color: ${COLORS.labelBlack};
        font-family: 'Work Sans', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
    }

    .doc-description {
        color: ${COLORS.contentText};
        font-family: 'Work Sans', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }

    .close-button {
        width: 34px;
        height: 34px;
    }
`

export const GeneratedReportsWrapper = styled.section`
    
    padding: 24px 32px;
    .head-name {
        color: ${COLORS.reportsHead};
        font-variant-numeric: lining-nums proportional-nums;
        font-family: 'Work Sans', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: -0.4px;
        text-transform: uppercase;
    }
    .text-tabel {
        font-family: 'Work Sans', sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
    }

    table {
        width: 100%;
        border: 1px solid ${COLORS.docBorder};
        border-collapse: collapse;
        border-radius: 8px;
        margin-top: 16px;

        .first-row {
            background: ${COLORS.tabelHeaderBackground};
        }

        tr {
            :nth-child(2) {
                width: 40%;
            }

            :first-child {
                border-radius: 8px 0 0 0;
            }

            :last-child {
                border-radius: 0 8px 0 0;
            }
        }

        th, td {
            color: ${COLORS.contentText};
            text-align: left;
            padding: 12px 24px;
        }

        td {
            color: ${COLORS.labelBlack}
        }
    }

    .download-icon {
        width: 24px;
        height: 24px;
    }
`