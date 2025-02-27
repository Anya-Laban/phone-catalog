/* eslint-disable max-len */
import { useContext, useMemo } from 'react';
import { ProductsContext } from '../../../../store/ProductsProvider';
import { ThemeContext } from '../../../../store/ThemeProvider';

import styles from './ShoppingBag.module.scss';
import classNames from 'classnames';

export const ShoppingBag = () => {
  const { isThemeDark } = useContext(ThemeContext);
  const { addedProducts } = useContext(ProductsContext);

  const countItems = useMemo(
    () => addedProducts.reduce((count, pr) => count + pr.count, 0),
    [addedProducts],
  );

  return (
    <div
      className={classNames(styles.ShoppingBag, {
        [styles.ShoppingBag_darkTheme]: isThemeDark,
      })}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.46683 0.933323C3.59273 0.765453 3.79032 0.666656 4.00016 0.666656H12.0002C12.21 0.666656 12.4076 0.765453 12.5335 0.933323L14.5335 3.59999C14.62 3.71539 14.6668 3.85574 14.6668 3.99999V13.3333C14.6668 13.8638 14.4561 14.3725 14.081 14.7475C13.706 15.1226 13.1973 15.3333 12.6668 15.3333H3.3335C2.80306 15.3333 2.29436 15.1226 1.91928 14.7475C1.54421 14.3725 1.3335 13.8638 1.3335 13.3333V3.99999C1.3335 3.85574 1.38028 3.71539 1.46683 3.59999L3.46683 0.933323ZM4.3335 1.99999L2.66683 4.22221V13.3333C2.66683 13.5101 2.73707 13.6797 2.86209 13.8047C2.98712 13.9298 3.15669 14 3.3335 14H12.6668C12.8436 14 13.0132 13.9298 13.1382 13.8047C13.2633 13.6797 13.3335 13.5101 13.3335 13.3333V4.22221L11.6668 1.99999H4.3335Z"
          fill="#313237"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.3335 4.00001C1.3335 3.63182 1.63197 3.33334 2.00016 3.33334H14.0002C14.3684 3.33334 14.6668 3.63182 14.6668 4.00001C14.6668 4.3682 14.3684 4.66668 14.0002 4.66668H2.00016C1.63197 4.66668 1.3335 4.3682 1.3335 4.00001Z"
          fill="#313237"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.33341 6C5.7016 6 6.00008 6.29848 6.00008 6.66667C6.00008 7.1971 6.21079 7.70581 6.58587 8.08088C6.96094 8.45595 7.46965 8.66667 8.00008 8.66667C8.53051 8.66667 9.03922 8.45595 9.41429 8.08088C9.78937 7.70581 10.0001 7.1971 10.0001 6.66667C10.0001 6.29848 10.2986 6 10.6667 6C11.0349 6 11.3334 6.29848 11.3334 6.66667C11.3334 7.55072 10.9822 8.39857 10.3571 9.02369C9.73198 9.64881 8.88414 10 8.00008 10C7.11603 10 6.26818 9.64881 5.64306 9.02369C5.01794 8.39857 4.66675 7.55072 4.66675 6.66667C4.66675 6.29848 4.96522 6 5.33341 6Z"
          fill="#313237"
        />
      </svg>

      {countItems > 0 && (
        <div className={styles.ShoppingBag__countItems}>{countItems}</div>
      )}
    </div>
  );
};
