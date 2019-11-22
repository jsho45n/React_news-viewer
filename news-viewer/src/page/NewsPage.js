import React from 'react';
import Categories from '../component/Categories';
import NewsList from '../component/NewsList';

const NewsPage = ({ match }) => {
    // 카테고리가 선택되지 않아았으면 기본값 all로 사용
    const category = match.params.category || 'all';


    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;