import React, { useRef, useCallback } from 'react';
import * as S from './styles';
import useMatchMedia from 'hooks/useMatchMedia';

const queries = ['max-width: 400px, min-width:800px'];

const KeywordSearch = ({ keywordSearch, setKeywordSearch, setSearchButton }) => {
  const inputSearch = useRef(null);
  // const [mobile, desktop] = useMatchMedia(queries);
  const mobile = true;
  const onChangeKeywordSearch = (e) => {
    setKeywordSearch(e.target.value);
  };

  const onClickSearch = useCallback(() => {
    setSearchButton(true);
    inputSearch.current.focus();
  }, []);

  return (
    !mobile?
    <>
      <S.SearchInput
        ref={inputSearch}
        placeholder="알림대상/알림내용/키워드 입력"
        value={keywordSearch}
        onChange={onChangeKeywordSearch}
      ></S.SearchInput>
      <S.SearchButton onClick={onClickSearch}>
        <span>검색하기</span>
        <S.SearchImage src="/asset/search.svg" />
      </S.SearchButton>
    </>
    :
    <S.MobileSearchWrapper>
      <S.SearchInput
        ref={inputSearch}
        placeholder="알림대상/알림내용/키워드 입력"
        value={keywordSearch}
        onChange={onChangeKeywordSearch}
      />
      <S.SearchButton onClick={onClickSearch}>
        <S.SearchImage src="/asset/search.svg" />
      </S.SearchButton>
    </S.MobileSearchWrapper>
  );
};

export default KeywordSearch;
