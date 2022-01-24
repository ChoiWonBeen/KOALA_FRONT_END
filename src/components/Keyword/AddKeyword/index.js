import React, { useCallback, useEffect, useState } from 'react';
import KeywordHeader from '../KeywordHeader';
import {
  getSiteRecommendation,
  patchModifyKeyword,
  getKeywordRecommendation,
  createKeyword,
} from 'store/modifyKeyword';
import { inquiry } from 'store/keyword';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { ALARM_TERM } from 'constant';
import { changeSiteName, changeAlarmTerm } from '../utils';

const AddKeyword = () => {
  const [site, setSite] = useState('');
  const [recommendKeyword, setRecommendKeyword] = useState('');
  const [recommendList, setRecommendList] = useState([]);
  const [recommendKeywords, setRecommendKeywords] = useState([]);
  const [selectRecommendItem, setSelectRecommendItem] = useState([]);
  const [selectRecommendKeyword, setSelectRecommendKeyword] = useState('');
  const [alreadyRegisterItem, setAlreadyRegisterItem] = useState(false);
  const [alreadyRegisterKeyword, setAlreadyRegisterKeyword] = useState(false);
  const [isNormalAlarm, setIsNormalAlarm] = useState(false);
  const [isImportantAlarm, setIsImportantAlarm] = useState(false);
  const [isSlientAlarm, setIsSlientAlarm] = useState(false);
  const [isVibrationAlarm, setIsVibrationAlarm] = useState(false);
  const [alarmTerm, setAlarmTerm] = useState(null);

  const { siteRecommendationList, keywordRecommendationList } = useSelector((state) => state.modifyKeyword);
  const { keywords } = useSelector((state) => state.keyword);
  const dispatch = useDispatch();

  const onChangeSite = (e) => {
    setSite(e.target.value);
    setAlreadyRegisterItem(false);
  };

  const onClickRecommendItem = useCallback(
    (e) => {
      let { innerText: value } = e.target;

      if (!selectRecommendItem.includes(site)) {
        setSelectRecommendItem([...selectRecommendItem, value]);
        setSite('');
      } else {
        setSite('');
        setAlreadyRegisterItem(true);
      }
    },
    [selectRecommendItem, site]
  );

  const onClickRecommendKeyword = useCallback(
    (item) => {
      if (!keywords.includes(item)) {
        setSelectRecommendKeyword(item);
        setRecommendKeywords([]);
      } else {
        setAlreadyRegisterKeyword(true);
      }
    },
    [keywords]
  );

  const onClickDeleteRecommendItem = useCallback(
    (id) => {
      const newList = selectRecommendItem.filter((item) => item !== selectRecommendItem[id]);
      setSelectRecommendItem(newList);
    },
    [selectRecommendItem]
  );

  const onChangeRecommendKeyword = (e) => {
    const { value } = e.target;
    setAlreadyRegisterKeyword(false);
    setRecommendKeyword(value);
    setSelectRecommendKeyword('');
  };

  const onClickNormalAlarm = () => {
    setIsNormalAlarm((prev) => !prev);
    setIsImportantAlarm(false);
  };

  const onClickImportantAlarm = () => {
    setIsImportantAlarm((prev) => !prev);
    setIsNormalAlarm(false);
  };

  const onClickSlientAlarm = () => {
    setIsSlientAlarm((prev) => !prev);
    setIsVibrationAlarm(false);
  };

  const onClickVibrationAlarm = () => {
    setIsVibrationAlarm((prev) => !prev);
    setIsSlientAlarm(false);
  };

  const onClickAlarmTerm = (id) => {
    setAlarmTerm(id);
  };

  const onClickCreateButton = useCallback(() => {
    const data = {
      alarmCycle: changeAlarmTerm(alarmTerm),
      alarmMode: isNormalAlarm ? 1 : 0,
      isImportant: isImportantAlarm ? 1 : 0,
      name: selectRecommendKeyword,
      siteList: selectRecommendItem.map((item) => changeSiteName(item)),
    };

    dispatch(createKeyword(data));

    setIsNormalAlarm(false);
    setIsImportantAlarm(false);
    setIsSlientAlarm(false);
    setIsVibrationAlarm(false);
    setAlarmTerm(false);
    setSelectRecommendItem([]);
    setRecommendKeyword('');
    setSelectRecommendKeyword('');
  }, [alarmTerm, isNormalAlarm, isImportantAlarm, selectRecommendItem]);

  useEffect(() => {
    if (site !== '') {
      dispatch(getSiteRecommendation(site));
    }
  }, [site]);

  useEffect(() => {
    if (recommendKeyword !== '') {
      dispatch(getKeywordRecommendation(recommendKeyword));
    }
  }, [recommendKeyword]);

  useEffect(() => {
    if (siteRecommendationList.length !== 0) {
      if (JSON.stringify(recommendList) !== JSON.stringify(siteRecommendationList)) {
        setRecommendList([...siteRecommendationList]);
      }
    }
  }, [siteRecommendationList]);

  useEffect(() => {
    if (keywordRecommendationList.length !== 0) {
      if (JSON.stringify(recommendKeywords) !== JSON.stringify(keywordRecommendationList)) {
        setRecommendKeywords([...keywordRecommendationList]);
      }
    }
  }, [keywordRecommendationList]);

  useEffect(() => {
    dispatch(inquiry());
  }, []);

  return (
    <>
      <KeywordHeader title={'키워드 추가하기'} />
      <S.HashtagContainer keyword={recommendKeyword === ''} alreadyRegister={alreadyRegisterKeyword}>
        <S.HashtageImage src="/asset/hashtagblack.svg" alt="hashtage_image" />
        <S.InputKeyword
          placeholder="키워드 입력"
          onChange={onChangeRecommendKeyword}
          value={selectRecommendKeyword === '' ? recommendKeyword : selectRecommendKeyword}
        ></S.InputKeyword>
        <S.AlreadyRegisterKeyword alreadyRegister={alreadyRegisterKeyword}>
          이미 등록한 사이트입니다.
        </S.AlreadyRegisterKeyword>
      </S.HashtagContainer>
      <S.RecommendKeywordContainer show={recommendKeyword === ''}>
        {recommendKeywords.length !== 0 &&
          recommendKeywords.map((item, index) => {
            return (
              <S.RecommendItem onClick={() => onClickRecommendKeyword(item)} key={index}>
                {item}
              </S.RecommendItem>
            );
          })}
      </S.RecommendKeywordContainer>
      <S.SearchContainer show={site === ''} alreadyRegister={alreadyRegisterItem}>
        <S.SearchImage src="/asset/searchblack.svg" alt="search_image" />
        <S.InputSite
          placeholder="알림받을 사이트 검색"
          value={site}
          onChange={onChangeSite}
          alreadyRegister={alreadyRegisterItem}
        ></S.InputSite>
        <S.AlreadyRegisterMessage alreadyRegister={alreadyRegisterItem}>
          이미 등록한 사이트입니다.
        </S.AlreadyRegisterMessage>
      </S.SearchContainer>
      <S.RecommendSiteContainer show={site === ''} alreadyRegister={alreadyRegisterItem}>
        {recommendList.length !== 0 &&
          recommendList.map((item, index) => {
            return (
              <S.RecommendItem onClick={onClickRecommendItem} key={index}>
                {item}
              </S.RecommendItem>
            );
          })}
      </S.RecommendSiteContainer>
      <S.SiteContainer>
        <S.SiteList>
          {selectRecommendItem.map((item, index) => {
            return (
              <S.SiteItem key={index}>
                <S.SiteName>{item}</S.SiteName>
                <S.CloseBtn onClick={() => onClickDeleteRecommendItem(index)}>
                  <S.XImage src="/asset/x.svg" alt="x_image" />
                </S.CloseBtn>
              </S.SiteItem>
            );
          })}
        </S.SiteList>
      </S.SiteContainer>
      <S.ImportantContainer onClick={onClickImportantAlarm}>
        <S.CheckBox isImportantAlarm={isImportantAlarm}></S.CheckBox>
        <S.CheckBoxTitle>중요 알림</S.CheckBoxTitle>
        <S.CheckBoxContent>중요알림 기능은 모바일 앱에서만 확인할 수 있습니다.</S.CheckBoxContent>
      </S.ImportantContainer>
      <S.NormalContainer onClick={onClickNormalAlarm}>
        <S.CheckBox isNormalAlarm={isNormalAlarm}></S.CheckBox>
        <S.CheckBoxTitle>일반 알림</S.CheckBoxTitle>
      </S.NormalContainer>
      <S.SettingContainer>
        <S.ModeContainer>
          <S.SlientMode onClick={onClickSlientAlarm}>무음모드에도 알림</S.SlientMode>
          <S.SlientCheckBox onClick={onClickSlientAlarm} isSlientAlarm={isSlientAlarm}></S.SlientCheckBox>
          <S.SlientMode onClick={onClickVibrationAlarm}>진동 알림</S.SlientMode>
          <S.VibrationCheckBox
            onClick={onClickVibrationAlarm}
            isVibrationAlarm={isVibrationAlarm}
          ></S.VibrationCheckBox>
          <S.SettingContent>무음모드에도 알림,진동 알림 기능은 모바일 앱에서만 적용이 가능합니다.</S.SettingContent>
        </S.ModeContainer>
        <S.AlarmContainer>
          <S.AlarmTitle>알람주기</S.AlarmTitle>
          <S.AlarmType>
            {ALARM_TERM.map((item) => {
              return (
                <S.Type onClick={() => onClickAlarmTerm(item.id)} alarmTerm={alarmTerm} checkId={item.id} key={item.id}>
                  {item.time}
                </S.Type>
              );
            })}
          </S.AlarmType>
        </S.AlarmContainer>
      </S.SettingContainer>
      <S.EditButton onClick={onClickCreateButton}>등록</S.EditButton>
      <S.CancelButton>취소</S.CancelButton>
    </>
  );
};

export default AddKeyword;
