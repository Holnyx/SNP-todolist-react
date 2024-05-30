import React from 'react';
import './CreateTour.sass'
import { InputField } from '@/components/commons/InputField';
import { SelectField } from '@/components/commons/SelectField';
import { CustomRadio } from '@/components/commons/CustomRadio';
import { CustomCheckBox } from '@/components/commons/CustomCheckbox';
import { ButtonForm } from '@/components/commons/ButtonForm';

export type directionOptionsType = {
    value: string
    title: string
    disabled?: boolean
}

const directionOptions: directionOptionsType[] = [
    { value: "color", title: "Куда хотите ехать", disabled: true },
    { value: "select", title: "Пункт выбран" },
    { value: "select2", title: "Пункт выбран" }
];


export const CreateTour = () => {

    return (
        <section className="create-tour">
            <div className="info">
                <h2 className="info__title" id="link-create-tour">Собери свой тур</h2>
                <span className="info__sub-title">Идейные соображения высшего порядка, а также рамки и место
                    обучения кадров</span>
            </div>
            <div className="wrapper">
                <form className="form" id="form" >
                    <fieldset className="form__item-box">
                        <InputField title={'Имя'} htmlFor={'userName'} placeholder={'Введите Ваше имя'}
                            required={true} className={'input-style'} type={'text'} id={'userName'} name={'name'} />
                        <SelectField title={'Направление'} htmlFor={'direction'} defaultValue={'color'} required={true}
                            className={'input-style'} id={'direction'} name={'direction'} />
                    </fieldset>
                    <fieldset className="form__item-box">
                        <InputField title={'Email'} htmlFor={'email'} placeholder={'example@mail.com'}
                            required={true} className={'input-style'} type={'email'} id={'email'} name={'email'} />
                        <InputField title={'Телефон'} htmlFor={'phoneNumber'} placeholder={'+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _'}
                            required={true} className={'input-style'} type={'phone'} id={'phoneNumber'}
                            maxLength={12} pattern={"^\+7\d{10}$"} name={'phone'} />
                    </fieldset>
                    <fieldset className="form__item-box">
                        <InputField title={'Дата от'} htmlFor={'dateFrom'} required={true}
                        className={'input-style'} type={'date'} id={'dateFrom'} max={"2999-12-31"} name={'dateFrom'}  />
                        <InputField title={'Дата до'} htmlFor={'dateUntil'} required={true}
                        className={'input-style'} type={'date'} id={'dateUntil'} max={"2999-12-31"} name={'dateUntil'}  />
                    </fieldset>

                    <div className="form__comment-box input-box">
                        <label className="comment-lable" htmlFor="comment">Комментарий</label>
                        <textarea className="input-style" id="comment"></textarea>
                    </div>
                    <div className="form__check-age">
                        <span>Вам есть 18 лет?</span>
                        <div className="form__check-age-box">
                            <CustomRadio id={'yes'} htmlFor={'yes'} title={'Да'} name={'yesNo'} />
                            <CustomRadio id={'no'} htmlFor={'no'} title={'Нет'} name={'yesNo'} />
                        </div>
                    </div>
                    <div className="form__item-box checkbox-block">
                        <CustomCheckBox label={'Нажимая кнопку, я принимаю условия '} link={'Лицензионного договора'} />
                    </div>
                    <div className="form__buttons">
                        <ButtonForm className={"find-button find-button--hover"} type={"submit"} title={'Найти тур'} />
                        <ButtonForm className={"reset-button  reset-button--hover"} type={"reset"} title={'Сбросить'} id={'clearForm'} />
                    </div>
                </form>
            </div>
        </section>
    );
};
