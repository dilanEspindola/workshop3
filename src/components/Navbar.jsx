import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      className='
        fixed bottom-0 left-0
        grid grid-cols-4
        justify-items-center content-center
        w-full h-11 bg-white
      '
    >
      <Link to='/'>
        <svg
          width='26'
          height='26'
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.75 16.25V24.375H3.25V9.75L13 1.625L22.75 9.75V24.375H16.25V16.25H9.75Z'
            stroke='#282222'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Link>
      <Link to='/favorites'>
        <svg
          width='26'
          height='26'
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.0001 23.3351C12.6787 23.3358 12.3604 23.2731 12.0633 23.1504C11.7663 23.0277 11.4965 22.8474 11.2694 22.6201L2.90068 14.2513C2.23958 13.583 1.71808 12.7899 1.36656 11.918C1.01504 11.0462 0.840521 10.1131 0.853182 9.17318C0.859552 8.3118 1.0358 7.46014 1.37183 6.66698C1.70785 5.87382 2.19706 5.15475 2.81143 4.55095C3.42579 3.94715 4.15324 3.47049 4.95211 3.14828C5.75098 2.82606 6.60557 2.66461 7.46693 2.67318C8.34371 2.66435 9.21334 2.83168 10.0242 3.16525C10.8351 3.49882 11.5708 3.99184 12.1876 4.61506L13.0001 5.42756L13.6663 4.76131C14.8167 3.5804 16.3562 2.85641 17.9994 2.72346C19.6427 2.5905 21.2785 3.05758 22.6038 4.03818C23.3582 4.61916 23.9802 5.3542 24.4283 6.19436C24.8765 7.03452 25.1405 7.96052 25.2027 8.91068C25.265 9.86084 25.1241 10.8134 24.7895 11.7048C24.4548 12.5963 23.9341 13.4062 23.2619 14.0807L14.7307 22.6201C14.5036 22.8474 14.2338 23.0277 13.9368 23.1504C13.6398 23.2731 13.3214 23.3358 13.0001 23.3351ZM7.43443 4.29006C6.14298 4.28874 4.90168 4.78992 3.97318 5.68756C3.49982 6.143 3.12338 6.68941 2.86647 7.29398C2.60957 7.89855 2.47749 8.5488 2.47818 9.20568C2.47106 9.92825 2.60744 10.645 2.87941 11.3145C3.15138 11.984 3.55353 12.5928 4.06256 13.1057L12.4313 21.4744C12.5068 21.5506 12.5967 21.611 12.6957 21.6523C12.7947 21.6935 12.9009 21.7148 13.0082 21.7148C13.1154 21.7148 13.2216 21.6935 13.3207 21.6523C13.4197 21.611 13.5095 21.5506 13.5851 21.4744L22.1244 12.9269C22.6257 12.4151 23.013 11.803 23.2608 11.1308C23.5087 10.4587 23.6115 9.74166 23.5626 9.02693C23.5192 8.30488 23.3203 7.60072 22.9795 6.96266C22.6387 6.32459 22.1641 5.76769 21.5882 5.33006C20.5775 4.58491 19.3305 4.23258 18.0793 4.33871C16.8282 4.44484 15.6582 5.0022 14.7876 5.90693L13.5769 7.15006C13.5014 7.22621 13.4115 7.28666 13.3125 7.32791C13.2135 7.36916 13.1073 7.3904 13.0001 7.3904C12.8928 7.3904 12.7866 7.36916 12.6876 7.32791C12.5886 7.28666 12.4987 7.22621 12.4232 7.15006L11.0419 5.76881C10.0906 4.82572 8.80651 4.29458 7.46693 4.29006H7.43443Z'
            fill='#282222'
          />
        </svg>
      </Link>
      <Link to='cart'>
        <svg
          width='26'
          height='26'
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_27_315)'>
            <path
              d='M25.2851 7.73504C24.7651 7.15004 24.0501 6.76004 23.2701 6.76004H13.2601C12.9351 6.76004 12.6101 7.02004 12.6101 7.41004C12.6101 7.80004 12.9351 8.06004 13.2601 8.06004H23.2701C23.6601 8.06004 24.0501 8.25504 24.3101 8.51504C24.5701 8.84004 24.7001 9.23004 24.5701 9.62004L23.9851 12.87H16.8351C16.5101 12.87 16.1851 13.13 16.1851 13.52C16.1851 13.91 16.5101 14.17 16.8351 14.17H23.7901L23.2051 17.29C23.1401 17.745 22.6851 18.07 22.2301 18.07H9.75006C9.29506 18.07 8.90506 17.745 8.77506 17.29L6.24006 3.18504C6.17506 2.86004 5.91506 2.66504 5.59006 2.66504H0.585059C0.260059 2.66504 -0.0649414 2.92504 -0.0649414 3.31504C-0.0649414 3.70504 0.260059 3.96504 0.585059 3.96504H5.07006L7.54006 17.615C7.67006 18.525 8.32006 19.175 9.16506 19.435C8.84006 19.89 8.58006 20.475 8.58006 21.125C8.58006 22.75 9.88006 24.05 11.5051 24.05C13.1301 24.05 14.4301 22.75 14.4301 21.125C14.4301 20.54 14.2351 19.955 13.9101 19.5H17.8751C17.5501 19.955 17.3551 20.54 17.3551 21.125C17.3551 22.75 18.6551 24.05 20.2801 24.05C21.9051 24.05 23.2051 22.75 23.2051 21.125C23.2051 20.475 23.0101 19.89 22.6851 19.435C23.5301 19.24 24.2451 18.525 24.4401 17.615L25.8701 9.94504C26.0001 9.16504 25.8051 8.38504 25.2851 7.73504ZM13.1301 21.06C13.1301 21.97 12.4151 22.685 11.5051 22.685C10.5951 22.685 9.88006 21.97 9.88006 21.06C9.88006 20.15 10.5951 19.435 11.5051 19.435C12.4151 19.435 13.1301 20.15 13.1301 21.06ZM20.3451 22.685C19.4351 22.685 18.7201 21.97 18.7201 21.06C18.7201 20.15 19.4351 19.435 20.3451 19.435C21.2551 19.435 21.9701 20.15 21.9701 21.06C21.9701 21.97 21.2551 22.685 20.3451 22.685Z'
              fill='#282222'
            />
          </g>
          <defs>
            <clipPath id='clip0_27_315'>
              <rect width='26' height='26' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <Link to='/User'>
        <svg
          width='26'
          height='26'
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13 13C14.1249 13 15.2245 12.6664 16.1598 12.0415C17.0951 11.4165 17.8241 10.5283 18.2546 9.48902C18.685 8.44976 18.7977 7.30619 18.5782 6.20293C18.3588 5.09966 17.8171 4.08624 17.0217 3.29083C16.2263 2.49542 15.2128 1.95374 14.1096 1.73429C13.0063 1.51483 11.8627 1.62746 10.8235 2.05794C9.78423 2.48841 8.89597 3.21739 8.27102 4.1527C7.64607 5.088 7.3125 6.18762 7.3125 7.3125C7.3125 8.82092 7.91172 10.2676 8.97833 11.3342C10.0449 12.4008 11.4916 13 13 13ZM13 3.25C13.8035 3.25 14.5889 3.48826 15.257 3.93466C15.9251 4.38105 16.4458 5.01553 16.7533 5.75785C17.0607 6.50018 17.1412 7.31701 16.9844 8.10506C16.8277 8.89311 16.4408 9.61697 15.8726 10.1851C15.3045 10.7533 14.5806 11.1402 13.7926 11.2969C13.0045 11.4537 12.1877 11.3732 11.4453 11.0658C10.703 10.7583 10.0685 10.2376 9.62216 9.56951C9.17576 8.90143 8.9375 8.11599 8.9375 7.3125C8.9375 6.23506 9.36551 5.20175 10.1274 4.43988C10.8892 3.67801 11.9226 3.25 13 3.25Z'
            fill='#282222'
          />
          <path
            d='M13.8125 14.625H12.1875C9.81713 14.625 7.54384 15.5666 5.86773 17.2427C4.19163 18.9188 3.25 21.1921 3.25 23.5625C3.25 23.778 3.3356 23.9847 3.48798 24.137C3.64035 24.2894 3.84701 24.375 4.0625 24.375H21.9375C22.153 24.375 22.3597 24.2894 22.512 24.137C22.6644 23.9847 22.75 23.778 22.75 23.5625C22.75 21.1921 21.8084 18.9188 20.1323 17.2427C18.4562 15.5666 16.1829 14.625 13.8125 14.625ZM4.92375 22.75C5.12354 20.963 5.97473 19.3123 7.31468 18.1132C8.65463 16.9142 10.3894 16.2509 12.1875 16.25H13.8125C15.6106 16.2509 17.3454 16.9142 18.6853 18.1132C20.0253 19.3123 20.8765 20.963 21.0763 22.75H4.92375Z'
            fill='#282222'
          />
        </svg>
      </Link>
    </div>
  );
};

export default Navbar;
