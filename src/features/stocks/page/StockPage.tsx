import React from 'react';
import {Button, Col, Row} from "antd";
import {Image} from "next/dist/client/image-component";
import Link from "next/link";

const StockPage = ({data, isLoading}) => {

    if (isLoading) {
        return <div>
            нет данных
        </div>
    }

    const sliceDesc = (text: string) =>{
        if (text.length > 140){
            return text.slice(0,140) + "..."
        } else {
            return text
        }
    }

    return (
        <div>
            <Row gutter={[16, 16]}>
                {[...data, ...data].map((item) => (
                    <Col key={item.id} xs={24} sm={24} md={24} lg={24} xl={8}>
                        <div className="stock-page-item">
                            <div className="stock-page-item-image">
                                <Image
                                    src={item.src}
                                    alt=""
                                    width={188}
                                    height={236}
                                    objectFit="cover"
                                />
                            </div>
                            <div className="stock-page-item-info">
                                <h3>
                                    {item.title}
                                </h3>
                                <p>
                                    {sliceDesc(item.discripyion)}
                                </p>
                                <div className="stock-page-item-info-button">
                                    <Button
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: 600,
                                            width: 140,
                                            height: 40,
                                            backgroundColor: '#35ade1',
                                            borderRadius: 100,
                                        }}
                                        type={"primary"}
                                    >
                                        Посмотреть
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default StockPage;