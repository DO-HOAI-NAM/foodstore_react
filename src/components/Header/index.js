import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIdentity, selectCurrentUser } from "../../store/slices/usersSlice";
import Button from "../../components/Button";
import { isLogin } from "../../helpers/isLogin";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (isLogin() && !currentUser?.data) {
      dispatch(getIdentity());
    }
  }, [dispatch, currentUser]);

  return (
    <section className="header-container">
      <div className="header-content">
        <Row className="container-fluid">
          <Col className="left" xs={0} sm={0} md={12} lg={12} xl={12}></Col>
          <Col className="right" xs={0} sm={0} md={12} lg={12} xl={12}>
            {isLogin() ? (
              <>
                <Link
                  to="/profile/user-form"
                  className="button button--light profile-btn"
                >
                  <img
                    className="avatar"
                    src={`http://localhost:4000/public/uploads/${currentUser?.data?.url}` || ""}
                    alt="avatar"
                    crossOrigin='anonymous'
                  />
                  Hello, {currentUser?.data?.name || "User"}
                </Link>
                <Button
                  onClick={() => {
                    localStorage.removeItem("currentUser");
                    localStorage.removeItem("accessToken");
                    navigate("/signin");
                  }}
                  type="button"
                  className="button button--text--white sign-out-btn"
                >
                  <span>Sign Out</span>
                </Button>
              </>
            ) : (
              <>
                <Link to="/signin" className="button button--text--white">
                  Sign In
                </Link>
                <Link to="/signup" className="button button--light square">
                  Sign Up
                </Link>
              </>
            )}
          </Col>
        </Row>
      </div>
    </section>
  );
}
