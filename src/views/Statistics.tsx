import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import {useTags} from "../hooks/useTags";
import {RecordItem, useRecords} from "../hooks/useRecords";
import day from 'dayjs';
import Variables from '../variables';

const LayoutList = styled(Layout)`

`;
const Item = styled.div`
  background: #fff;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-bottom: 0;
  }

  .date-wrapper {
    font-size: 18px;
    //color: ${Variables.$darkGrey};
    border-right: 1px solid #f5f5f5;
    padding: 8px;
    height: 62px;
  }

  header {
    display: flex;
    background: #fff;
    color: ${Variables.$darkGrey};

    .amount-wrapper {
      display: flex;
      flex: 1;
      padding: 4px 8px;
      align-items: center;

      .amount {
        flex: 1;
        padding: 0 8px;

        .category {
          font-size: 12px;
        }

        .total {
          font-size: 20px;
          margin-top: 6px;
        }
      }
    }
  }

  .record-wrapper {
    flex: 1;
    background: #f5f5f5;
    display: flex;
    padding-right: 8px;
    .bg {
      width: 110px;
    }
    ul {
      flex: 1;
      li {
        position: relative;
        margin: 8px 0;
        background: #fff;
        border-radius: 4px;

        &:after {
          content: '';
          position: absolute;
          height: 12px;
          border-left: 6px solid transparent;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-right: 6px solid #fff;
          left: -12px;
          top: 10px;
        }

        .category {
          position: absolute;
          left: -36px;
          top: 4px;
          height: 20px;
          width: 20px;
          border-radius: 20px;
          font-size: 16px;
          line-height: 1;
          color: #fff;

          &.in {
            background: ${Variables.$green};
          }

          &.out {
            background: ${Variables.$red};
          }
        }

        .content {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          font-weight: bold;
          padding: 6px 10px;
          color: ${Variables.$darkGrey};
          border-bottom: 1px solid #f5f5f5;

          .out {
            color: ${Variables.$red};
          }

          .in {
            color: ${Variables.$green}
          }
        }

        .note {
          padding: 6px 8px;
          color: ${Variables.$grey};
        }
      }
    }
  }
`;

function Statistics() {
  const {getTagNames} = useTags();
  const {records} = useRecords();
  let newRecords: { [K: string]: RecordItem[] } = {};
  records.forEach(r => {
    const key = day(r.createAt).format('YYYY-MM-DD');
    if (newRecords[key] === undefined) {
      newRecords[key] = [];
    }
    newRecords[key].push(r);
  });
  const groupRecords = Object.entries(newRecords);
  // 计算总金额
  const calcAmount = (array: RecordItem[]) => {
    let inCome = 0;
    let outCome = 0;
    array.forEach(item => {
      if (item.category === '-') {
        outCome = outCome + item.amount;
      } else {
        inCome = inCome + item.amount;
      }
    });
    return [inCome, outCome];
  };
  return (
    <LayoutList title='统计'>
      {groupRecords && groupRecords.map((r, index) => {
        return (
          <Item key={index}>
            <header>
              <div className="date-wrapper flex-center">
                <div className="date">{r[0]}</div>
              </div>
              <div className="amount-wrapper">
                <div className="amount">
                  <div className="category">收入(元）</div>
                  <div className="total">{calcAmount(r[1])[0]}</div>
                </div>
                <div className="amount">
                  <div className="category">支出(元)</div>
                  <div className="total">{calcAmount(r[1])[1]}</div>
                </div>
              </div>
            </header>
            <div className="record-wrapper">
              <div className="bg"></div>
              <ul>
                {r[1].map(item => {
                  return <li key={item.createAt}>
                    <div
                      className={item.category === '-' ? 'category flex-center out' : 'category flex-center in'}>{item.category}</div>
                    <section className="content">
                      <div className="tags">{getTagNames(item.tagIds)}</div>
                      <div className={item.category === '-' ? 'out' : 'in'}>
                        {item.category === '-' ? `-${item.amount}` : `+${item.amount}`}
                      </div>
                    </section>
                    {item.note === '' || item.note === undefined ? null : (
                      <section className="note">
                        <div className="noteContent">{item.note}</div>
                      </section>
                    )}
                  </li>;
                })}
              </ul>
            </div>

          </Item>
        );
      })}
    </LayoutList>
  );
}

export default Statistics;
