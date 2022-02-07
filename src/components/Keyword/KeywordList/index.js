import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styles';
import { getTitle } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { readKeywordItem } from 'store/keyword';

const KeywordList = ({
  checkListId,
  checkAll,
  setCheckListId,
  isToggle,
  readNotification,
  notReadNotification,
  keywordSearch,
  searchButton,
  setKeywordSearch,
  setSearchButton,
  menu,
}) => {
  const dispatch = useDispatch();
  const { keywordList } = useSelector((state) => state.keyword);
  const [list, setList] = useState();

  const onClickCheckSome = useCallback(
    (id) => {
      let newCheckListId = [...checkListId];

      if (checkListId.includes(id)) {
        newCheckListId = checkListId.filter((item) => {
          if (item !== id) {
            return item;
          }
        });

        setCheckListId(newCheckListId);
      } else {
        newCheckListId.push(id);
        setCheckListId(newCheckListId);
      }
    },
    [checkListId]
  );

  const onClickReadItem = (id, isRead) => {
    if (!isRead) {
      dispatch(readKeywordItem(id));
    }
  };

  useEffect(() => {
    if (list && list.length === 0) {
      setList(keywordList);
    }

    if (notReadNotification) {
      const filterList = keywordList.filter((item) => {
        return item.isRead === false;
      });
      setList(filterList);
    } else if (readNotification) {
      const filterList = keywordList.filter((item) => {
        return item.isRead === true;
      });
      setList(filterList);
    } else {
      setList(keywordList);
    }
  }, [readNotification, notReadNotification]);

  useEffect(() => {
    setList(keywordList);
  }, [keywordList]);

  useEffect(() => {
    if (menu === '전체') {
      setList(keywordList);
    } else if (menu === '아우누리') {
      const filterList = keywordList.filter((item) => {
        if (item.site === 'PORTAL') {
          return item;
        }
      });
      setList(filterList);
    } else if (menu === '아우미르') {
      const filterList = keywordList.filter((item) => {
        if (item.site === 'DORM') {
          return item;
        }
      });
      setList(filterList);
    } else {
      setList([]);
    }
  }, [menu]);

  useEffect(() => {
    const filterList =
      list &&
      list.filter((item) => {
        if (`${item.title}`.includes(`${keywordSearch}`)) {
          return item;
        }
      });
    setList(filterList);
    setKeywordSearch('');
    setSearchButton(false);
  }, [searchButton]);

  return (
    <S.MainList toggle={isToggle}>
      {list &&
        list.map((item) => {
          return (
            <S.MainItem key={item.id}>
              <S.MainCheckBox
                onClick={() => onClickCheckSome(item.id)}
                checkSome={checkListId.includes(item.id)}
                checkAll={checkAll}
              ></S.MainCheckBox>
              <S.MainCheckBoxTitle readState={item.isRead}>{getTitle(item.site)}</S.MainCheckBoxTitle>
              <a href={`${item.url}`} target="_blank">
                <S.MainContent readState={item.isRead} onClick={() => onClickReadItem(item.id, item.isRead)}>
                  {item.title}
                </S.MainContent>
              </a>
              <S.MainReadState>{item.isRead ? '읽음' : '읽지 않음'}</S.MainReadState>
              <S.MainPeriod readState={item.isRead}>{item.createdAt}</S.MainPeriod>
            </S.MainItem>
          );
        })}
    </S.MainList>
  );
};

export default KeywordList;
