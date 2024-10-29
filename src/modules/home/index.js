import React, { useEffect, useState } from "react";
import { Col, Row, Form, Input, Select } from "antd";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import ScrollToTop from "react-scroll-to-top";

import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {
  changeSearchCategory,
  changeSearchTerm,
  fetchAll,
  fetchAllCategoryBook,
  fetchBestSeller,
  fetchNewest,
  fetchSaleoff,
  selectBestSellerBooks,
  selectBooks,
  selectCategoryBook,
  selectFilteredBookGrid,
  selectNewestBooks,
  selectsaleoff,
} from "../../store/slices/booksSlice";
import Pagination from "../../components/Pagination";
import Button from "../../components/Button";
import { fetchBanners, selectBanners } from "../../store/slices/bannerSlice";

const mockAPI = [
  {
    name: "A doctor in the house",
    cover:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book11-copyright.jpg",
    author: "Candy Carson",
    price_from: "6.50",
    price_to: "16.99",
  },
  {
    name: "Wildflower",
    cover:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book13-copyright.jpg",
    author: "Drew Berrymore",
    price_from: "10.99",
    price_to: "20.00",
  },
  {
    name: "New Galaxy",
    cover:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book8-copyright.jpg",
    author: "Richard Mann",
    price_from: "7.90",
    price_to: "16.90",
  },
  {
    name: "The Long Road to the Depp Silence",
    cover:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book5-copyright.jpg",
    author: "Richard Mann",
    price_from: "12.00",
    price_to: "22.00",
  },
  {
    name: "Life in the Garden",
    cover:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book4-copyright.jpg",
    author: "Candy Carson",
    price_from: "11.99",
    price_to: "25.00",
  },
  {
    name: "It's a Really Strange Story",
    cover:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book12-copyright.jpg",
    author: "Burt Geller",
    price_from: "8.00",
    price_to: "18.00",
  },
];

const { Option } = Select;

const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  // adaptiveHeight: true,
  swipe: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  customPaging: (i) => <div className="button-slide" />,
  // nextArrow: <FaAngleRight />,
  // prevArrow: <FaAngleLeft />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function HomePage() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [page, setPage] = useState(1);
  const books = useSelector(selectBooks);
  const filteredBooks = useSelector(selectFilteredBookGrid);
  const [cloneBooks, setCloneBooks] = useState([]);
  const saleoff = useSelector(selectsaleoff);
  const bestSellerBooks = useSelector(selectBestSellerBooks);
  const newestBooks = useSelector(selectNewestBooks);
  const bookCategory = useSelector(selectCategoryBook);
  const banner = useSelector(selectBanners)

  console.log('banner', banner);
  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        dispatch(fetchAllCategoryBook()),
        dispatch(fetchSaleoff()),
        dispatch(fetchBestSeller()),
        dispatch(fetchNewest()),
        dispatch(fetchAll()),
        dispatch(fetchBanners()),
      ]);
    };

    fetchData();
  }, [dispatch]);

  // Clone books
  useEffect(() => {
    const limit = 10;
    let start = (page - 1) * limit;
    let end = (page - 1) * limit + limit;
    setCloneBooks(filteredBooks.slice(start, end));
  }, [filteredBooks, page]);

  console.log('sale', saleoff);
  console.log('banner', banner[0]);

  // Search
  const handleClickSearch = () => {};
  return (
    <div className="app-container">
      <Header />
      {/* Banner */}
      <section className="banner-container">
        <ScrollToTop smooth color="#6f00ff" />
        <Navigation />
        <Row className="container-fluid banner-content">
          <Col className="left" xs={0} sm={0} md={6} lg={6} xl={6}>
            <div className="content">
              <Typewriter
                options={{
                  strings: [
                    "Food store. For your health",
                    "Best online Food store",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 3000,
                }}
              />
              <p className="sub-title">
                Best food store for the expired soon food
              </p>
            </div>
          </Col>
          <Col className="right" xs={0} sm={0} md={12} lg={12} xl={12}>
            <div></div>
          </Col>
        </Row>
      </section>

      {/* Discover */}
      <section className="discover-container container-space">
        <div className="container-fluid">
          <h3 className="title">Discover Your Next Food</h3>
          <div className="discover-content">
            <h4 className="heading">New Releases</h4>
            <div className="grid-product">
              {saleoff &&
                saleoff.map((item, index) => (
                  <Link
                    to={`books/${item.id}`}
                    className="item"
                    key={item.created_at + index}
                  >
                    <img
                      alt="img"
                      src={
                        item.image
                          ? item.image
                          : mockAPI[3].cover
                      }
                      className="cover"
                    />
                    <div className="bottom">
                      <div className="info">
                        <h3 className="name">
                          {item.product_name ? item.product_name : mockAPI[3].name}
                        </h3>
                        <p className="author">{item.author}</p>
                      </div>
                      <p className="prices">${item.price}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="trending-container container-space banner">
      <div className="left-banner">
      <img src={banner.length > 0 ? banner[0].image_url : ''} alt="doctor" className="doctor-avatar" />
      </div>

        <div className="container-fluid middle">
          <h3 className="title">Big Sales Off</h3>
          <div className="trending-content">
            <h4 className="heading">Expired Soon - Buy for the better price</h4>
               <div className="trending-list">
              <Slider {...settings}>
                {saleoff &&
                  saleoff.map((item, index) => (
                    <Link
                      to={`books/${item.id}`}
                      className="item"
                      key={item.name + index}
                    >
                      <div className="product">{item.dayLeft} days left</div>
                      <img
                        alt="img"
                        src={
                          item.image
                            ? item.image
                            : mockAPI[3].cover
                        }
                        className="cover"
                      />
                      <div className="bottom">
                        <div className="info">
                          <h3 className="name">
                            {item.title ? item.title : mockAPI[3].name}
                          </h3>
                          <p className="author">{item.author}</p>
                        </div>
                        <p className="prices">${item.price}</p>
                      </div>
                    </Link>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="right-banner">
        <img src={banner.length > 0 ? banner[1].image_url : ''} alt="doctor" className="doctor-avatar" />

        </div>

      </section>

      {/* Best Seller */}
      <section className="best-seller-container container-space">
        <div className="container-fluid">
          <h3 className="title">Choose Best Seller Food</h3>
          <div className="best-seller-content">
            <h4 className="heading">Best Seller</h4>
            <div className="best-seller-list">
              <Slider {...settings}>
                {bestSellerBooks &&
                  bestSellerBooks.map((item, index) => (
                    <Link
                      to={`books/${item.id}`}
                      className="item"
                      key={item.name + index}
                    >
                      <img
                        alt="img"
                        src={
                          item.image
                            ? item.image
                            : mockAPI[3].cover
                        }
                        className="cover"
                      />
                      <div className="bottom">
                        <div className="info">
                          <h3 className="name">
                            {item.title ? item.title : mockAPI[3].name}
                          </h3>
                          <p className="author">{item.author}</p>
                        </div>
                        <p className="prices">${item.price}</p>
                      </div>
                    </Link>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Newest */}
      <section className="newest-container container-space">
        <div className="container-fluid">
          <h3 className="title">Choose The Newest Food</h3>
          <div className="newest-content">
            <h4 className="heading">Newest</h4>
            <div className="newest-list">
              <Slider {...settings}>
                {newestBooks &&
                  newestBooks.map((item, index) => (
                    <Link
                      to={`books/${item.id}`}
                      className="item"
                      key={item.name + index}
                    >
                      <img
                        alt="img"
                        src={
                          item.image
                            ? item.image
                            : mockAPI[3].cover
                        }
                        className="cover"
                      />
                      <div className="bottom">
                        <div className="info">
                          <h3 className="name">
                            {item.product_name ? item.product_name : mockAPI[3].name}
                          </h3>
                          <p className="author">{item.author}</p>
                        </div>
                        <p className="prices">${item.price}</p>
                      </div>
                    </Link>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Display Grid Product */}
      <section className="list-container container-space banner">
      <div className="left-banner">
        <img src={banner.length > 0 ? banner[2].image_url : ''} alt="doctor" className="doctor-avatar" />

      </div>
        <div className="container-fluid grid-content">
          <h3 className="title">Grid display books</h3>
          <Form
            scrollToFirstError
            form={form}
            className="search-container"
            onFinish={handleClickSearch}
          >
            <Form.Item name="product_name">
              <Input
                className="input"
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
                placeholder="Product Name"
              ></Input>
            </Form.Item>

            <Form.Item name="category">
              <Select
                placeholder="Select your cateogry"
                onChange={(value) => dispatch(changeSearchCategory(value))}
              >
                {bookCategory &&
                  bookCategory.map((item, index) => (
                    <Option key={index} value={item.category_name}>
                      {item.category_name}
                    </Option>
                  ))}
              </Select>
            </Form.Item>

            <Button
              type="button"
              className="button button--main--book"
              onClick={() => {
                dispatch(changeSearchCategory(""));
                dispatch(changeSearchTerm(""));
                form.resetFields();
              }}
            >
              Reset
            </Button>
          </Form>
          <div className="grid-product">
            {cloneBooks &&
              cloneBooks.map((item, index) => (
                <Link
                  to={`books/${item.id}`}
                  className="item"
                  key={item.created_at + index}
                >
                  <img
                    alt="img"
                    src={
                      item.image
                        ? item.image
                        : mockAPI[3].cover
                    }
                    className="cover"
                  />
                  <div className="bottom">
                    <div className="info">
                      <h3 className="name">
                        {item.product_name ? item.product_name : mockAPI[3].name}
                      </h3>
                      <p className="author">{item.author}</p>
                    </div>
                    <p className="prices">${item.price}</p>
                  </div>
                </Link>
              ))}
          </div>
          <Pagination
            limit={10}
            setPage={setPage}
            currentPage={page}
            count={filteredBooks.length}
          />
        </div>
       <div className="right-banner">
       <img src={banner.length > 0 ? banner[3].image_url : ''} alt="doctor" className="doctor-avatar" />
       </div>
      </section>

      <Footer />
    </div>
  );
}
