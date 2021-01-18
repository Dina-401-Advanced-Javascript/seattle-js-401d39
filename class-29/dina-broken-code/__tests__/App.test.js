import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from '../src/components/app/app';
import './app.scss';

test('Can initialize the page', () => {
  render(<App />);
  const count = screen.getByTestId('count');
  const submitButton = screen.getByTestId('submit-button');
  fireEvent.click(submitButton);
  expect(count).toHaveTextContent(0);
});
/*
test('Can do a get', async () => {
  
  render(<App />);
  const url = screen.getByTestId('url');
  fireEvent.change(url,{target: {value:'https://cat-fact.herokuapp.com/facts'}});
  const count = screen.getByTestId('count');
  const submitButton = screen.getByTestId('submit-button');
  await fireEvent.click(submitButton);
  // console.log('count', count);
  expect(count).toHaveTextContent(5);
});
/*
test('dynamically updates money', () => {
  render(<Mom />);
  const money = screen.getByTestId('money');
  const moneyButton = screen.getByTestId('money-button');
  fireEvent.click(moneyButton);
  expect(money).toHaveTextContent(200);
});

test('begins with 100 dollars', () => {
    render(<Mom />);
    const money = screen.getByTestId('money'); // get by data-testId='money'
    const bobMoney = screen.getByTestId('bobs-money');
    expect(money).toHaveTextContent(100);
    expect(bobMoney).toHaveTextContent(0);
});

test('dynamically gets momey from mom', () => {
    render(<Mom />)
    const money = screen.getByTestId('bobs-money');
    const moneyButton = screen.getByTestId('ask-for-money');
    fireEvent.click(moneyButton);
    expect(money).toHaveTextContent(20);
  });
  */