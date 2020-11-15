import * as React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import CardImage from '../components/CardImage';
import CartButton from '../components/CartButton';
import CardInfo from '../components/CardInfo';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('<CardImage />', () => {
  it('데이터 반영 확인', () => {
    const data = {
      src:
        'https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729',
      alt: '포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스',
    };
    const { getByAltText } = render(
      <CardImage src={data.src} alt={data.alt} />
    );
    const image = getByAltText(data.alt);
    expect(image).toHaveAttribute('src', data.src);
  });
});

describe('<CardInfo />', () => {
  it('금액 콤마 정규식 반영 확인', () => {
    const data = {
      title: '포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스',
      price: 100000000,
    };
    const { getByText } = render(
      <CardInfo title={data.title} price={data.price} />
    );
    expect(getByText(/0원/i)).toHaveTextContent('100,000,000');
  });
});
