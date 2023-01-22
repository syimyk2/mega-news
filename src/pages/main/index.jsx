/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { NewsList } from '../../components/news-list'
import { Filter } from '../../components/UI/filteration'
import {
   filterNewsRequest,
   getNewsList,
   getTagListRequest,
   setLikeNews,
} from '../../store/newsSlice'
import media from '../../utils/helpers/media'
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg'
import { Flex } from '../../styles/styles-for-positions/style'
import LoaderCard from '../../components/UI/loader/LoaderCard'

export const MainPage = () => {
   const dispatch = useDispatch()
   const { newslist, tagList, isLoading, error } = useSelector(
      (state) => state.news
   )

   const showFilteringHandler = () => {}

   const setLikeHandler = (postId) => {
      dispatch(setLikeNews({ post: postId }))
         .unwrap()
         .then(() => {
            dispatch(getNewsList())
         })
   }
   const submitFilter = (filterData) => {
      dispatch(filterNewsRequest(filterData))
   }

   useEffect(() => {
      dispatch(getNewsList())
      dispatch(getTagListRequest())
   }, [])

   return (
      <Container>
         <MainPages>
            <Flex justify="end" width="100%" className="filter_box">
               <FilterIconStyled
                  className="filter_icon"
                  onClick={showFilteringHandler}
               />
            </Flex>
            <Filter tagList={tagList} onSubmitFilter={submitFilter} />

            {!isLoading ? (
               <NewsList
                  newsList={newslist}
                  isLoading={isLoading}
                  error={error}
                  onLike={setLikeHandler}
               />
            ) : (
               <LoaderCard />
            )}
         </MainPages>
      </Container>
   )
}

const FilterIconStyled = styled(FilterIcon)`
   cursor: pointer;
   width: 24px;
   height: 24px;
   :hover {
      path {
         stroke: #7e5bc2;
      }
   }
`
const Container = styled.div`
   width: 100%;
   margin: 0 auto;
`
const MainPages = styled.div`
   width: 100%;
   gap: 100px;
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   margin: 0 auto;
   padding: 210px 100px;
   min-height: ${`${window.innerHeight}px`};
   text-align: center;
   .filter_icon {
      display: none;
   }
   .filter_box {
      position: absolute;
   }

   ${media.tablet`
   text-align:center;
   flex-direction: column;
   gap: 0;
   padding: 210px 0 0;
   .filter{
         display: none
      }
   .filter_icon {
      display: block;
   }
   .filter_box{
      position: static;
   }
   `}

   ${media.mobile`
   gap: 0;
   flex-direction: column;
   padding: 210px 0 0;
      .filter{
         display: none
      }
      .filter_icon {
      display: block;
      }
      .filter_box{
         width: 100%;
         position: relative;
         margin-bottom: 20px;
         svg {
            position: fixed;
         }
      }
   `}

   & h1 {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 39px;
      line-height: 38px;
      text-transform: uppercase;
      color: #ffffff;
      ${media.tablet`
       font-size:26px;
     `}
   }
`
