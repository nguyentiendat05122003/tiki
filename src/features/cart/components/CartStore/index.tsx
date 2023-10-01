import { Checkbox, FormControlLabel } from '@mui/material';
import style from './CartStore.module.scss';
import classNames from 'classnames/bind';
import { DeleteIcon } from '~/components/Svg';
import Image from '~/components/Image';
import { itemInCartType } from '~/types/cart';
import { FormatPrice } from '~/utils/formatPrice';

export interface CartStoreProps {
    data: itemInCartType[] | [];
}
export default function CartStore({ data }: CartStoreProps) {
    const cx = classNames.bind(style);
    return (
        <div className={cx('container')}>
            <div className={cx('content-left')}>
                <div className={cx('heading-wrapper')}>
                    <div className={cx('heading-label')}>
                        <FormControlLabel
                            sx={{ fontSize: '1.2rem' }}
                            control={<Checkbox name="removeAll" />}
                            label={<span className={cx('text')}>Tất cả (2 sản phẩm)</span>}
                        />
                    </div>
                    <span>Đơn giá</span>
                    <span>Số lượng</span>
                    <span>Thành tiền</span>
                    <span className={cx('remove-all')}>
                        <DeleteIcon className={cx('')} />
                    </span>
                </div>
                {data.map((cartItem, idx) => {
                    return (
                        <div key={idx} className={cx('item-container')}>
                            <div className={cx('item')}>
                                <div className={cx('item-container')}>
                                    <div className={cx('row')}>
                                        <div className={cx('col-1')}>
                                            <div className={cx('info-item')}>
                                                <FormControlLabel
                                                    sx={{ fontSize: '1.2rem' }}
                                                    control={<Checkbox name="removeItem" />}
                                                    label={
                                                        <span className={cx('text')}>
                                                            {cartItem.item?.name}
                                                        </span>
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('col-2')}>
                                            <p className={cx('product-prices')}>
                                                <span className={cx('real')}>
                                                    {FormatPrice(cartItem.item?.salePrice || 1)}đ
                                                </span>
                                                <del className={cx('origin-price')}>
                                                    {FormatPrice(cartItem.item?.originalPrice || 1)}
                                                    đ
                                                </del>
                                            </p>
                                        </div>
                                        <div className={cx('col-3')}>
                                            <div className={cx('form-wrapper')}>
                                                <span className={cx('btn-decrease', 'btn')}>
                                                    <Image src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg" />
                                                </span>
                                                <input
                                                    type="tel"
                                                    value={cartItem.quantity}
                                                    onChange={() => {
                                                        console.log(1);
                                                    }}
                                                    className={cx('input')}
                                                />
                                                <span className={cx('btn-increase', 'btn')}>
                                                    <Image src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cx('col-4')}>
                                            <span className={cx('product-price')}>
                                                {FormatPrice(cartItem.item?.salePrice || 1)}đ
                                            </span>
                                        </div>
                                        <div className={cx('col-5')}>
                                            <span className={cx('delete-wrapper')}>
                                                <DeleteIcon className={cx('')} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cx('content-right')}>
                <div className={cx('container')}>
                    <div className={cx('prices-items')}>
                        <div className={cx('prices-item')}>
                            <div className={cx('prices-text')}>Tạm tính</div>
                            <div className={cx('prices-value')}>0đ</div>
                        </div>
                        <div className={cx('prices-item')}>
                            <div className={cx('prices-text')}>Giảm giá</div>
                            <div className={cx('prices-value')}>0đ</div>
                        </div>
                    </div>
                    <div className={cx('price-total')}>
                        <span className={cx('prices-text')}>Tổng tiền</span>
                        <div className={cx('prices-content')}>
                            <div className={cx('price-value')}>Vui lòng chọn sản phẩm</div>
                            <span className={cx('prices-value-noted')}>
                                (Đã bao gồm VAT nếu có)
                            </span>
                        </div>
                    </div>
                </div>
                <button className={cx('btn-buy')}>Mua Hàng 0</button>
            </div>
        </div>
    );
}
