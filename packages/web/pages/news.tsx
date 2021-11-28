import { useEffect, useState } from 'react';
import DesktopWindow from 'components/DesktopWindow';
import Head from 'components/Head';
import { getNewsItems, getNewsItem } from 'src/NewsItems';
const title = 'News';

import styled from '@emotion/styled';
import { check } from 'prettier';

export default function News() {
  
    const [NewsContentListings, setNewsContentListings]  = useState('');
    const [NewsContent, setNewsContent]  = useState('');

    const getContent = async () => {
      const news = await getNewsItem();
      setNewsContent(news);

      const newsItems = await getNewsItems();
      setNewsContentListings(newsItems);
    }

    return (
      <>
        <Head title={title} />
        <DesktopWindow title={title} width={1024} height={576}>
          <div>News Listings: {NewsContentListings}</div>
          <div>News One Item: {NewsContent}</div>
          <button onClick={getContent}>Press to get content</button>
        </DesktopWindow>
      </>
    );
  }
  