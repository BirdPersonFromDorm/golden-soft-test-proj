import React, {useEffect, useRef, useState} from 'react';
import style from './style.module.scss'

const DropDown = ({
                      startIcon,
                      backIcon,
                      selectedItem,
                      setSelectedItem,
                      itemsToChoose
                  }) => {

    const dropDownListRef = useRef(null);
    const [isShow, setIsShow] = useState(false)

    const onChange = (item) =>{
        setIsShow(false)
        setSelectedItem(item)
    }

    const sliceTitle = (title: string) =>{
        if (title.length > 10){
            return title.slice(0,10) + "..."
        } else {
            return title
        }
    }

    useEffect(() => {
        if (isShow) {
            const handleClickOutside = (event) => {
                if (dropDownListRef.current && !dropDownListRef.current.contains(event.target)) {
                    setIsShow(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isShow, dropDownListRef]);

    return (
        <div className={style.dropDownButtonWrap}>
            <button className={style.dropDownButtonWrapMain} onClick={() => setIsShow(!isShow)}>
                {!!startIcon && startIcon}
                <h5>
                    {sliceTitle(selectedItem)}
                </h5>
                {!!backIcon && backIcon}
            </button>
            {isShow &&
                <div
                    className={style.dropDownButtonWrapDropList}
                    ref={dropDownListRef}
                >
                    {itemsToChoose.map((item) =>
                        <li onClick={() =>onChange(item)}>
                            {item}
                        </li>
                    )}
                </div>
            }
        </div>
    );
};

export default DropDown;