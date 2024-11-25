import Container from "./components/Container";
import Flex from "./components/Flex";
import Image from "./components/Image";
import logo from "./assets/logo.png";
import Menu from "./components/Menu";
import {
  IoSearchOutline,
  IoBagCheckOutline,
  IoCartOutline,
} from "react-icons/io5";
import Button from "./components/Button";
import Heading from "./components/Heading";
import BannerImg from "./assets/BannerImg.png";
import ClassicImg from "./assets/ClassicImg.png";
import Product1 from "./assets/Product1.png";
import Product2 from "./assets/Product2.png";
import Product3 from "./assets/Product3.png";
import Product4 from "./assets/Product4.png";
import Categories1 from "./assets/Categories1.png";
import Categories2 from "./assets/Categories2.png";
import Categories3 from "./assets/Categories3.png";
import Categories4 from "./assets/Categories4.png";
import { TiArrowRightThick } from "react-icons/ti";
import SellerImg1 from "./assets/SellerImg1.png";
import SellerImg2 from "./assets/SellerImg2.png";
import SellerImg3 from "./assets/SellerImg3.png";
import SellerImg4 from "./assets/SellerImg4.png";
import Instagram1 from "./assets/Instagram1.png";
import Instagram2 from "./assets/Instagram2.png";
import Instagram3 from "./assets/Instagram3.png";
import Instagram4 from "./assets/Instagram4.png";
import Instagram5 from "./assets/Instagram5.png";
import logoA from "./assets/logoA.png";
import { CiHeart } from "react-icons/ci";
import HeadingA from "./components/HeadingA";
import "./App.css";



const NavandBannr = () => (
  <>
    <div id="navs" className="bg-banBg bg-cover bg-no-repeat bg-center">
      <div className="fixed top-0 left-0 right-0 bg-transparent bg-rounded shadow-md z-[999]">
        <Container className={" max-w-[1320px] py-5"}>
          <Flex className={" items-center flex-wrap"}>
            <div className="flex-shrink-0">
              <Image src={logo} alt={logo} />
            </div>
            <div className="font-pop ms-auto px-[70px] hidden md:flex">
              <Flex className={"gap-[50px] items-center "}>
                <Menu mText={"Home"} className={"hover:text-btnclr"} />
                <Menu mText={"About Us"} className={"hover:text-btnclr"} />
                <Menu mText={"Pages"} className={"hover:text-btnclr"} />
                <Menu mText={"Blog"} className={"hover:text-btnclr"} />
                <Menu mText={"Faq's"} className={"hover:text-btnclr"} />
              </Flex>
            </div>
            <div className="">
              <Flex className={"gap-7 flex md:order-last ml-auto"}>
                <IoSearchOutline />
                <IoBagCheckOutline />
              </Flex>
            </div>
            <div className="px-7 hidden md:block">
              <Button
                btnText={"Contact Us"}
                className={
                  "bg-btnclr w-[168px] h-[52px] text-txtclr rounded-[30px]"
                }
              />
            </div>
          </Flex>
          {/* Nav End */}
          {/* Banner Start */}
        </Container>
      </div>
      <Container className={" max-w-[1320px]"}>
        <div className="mt-[100px]">
          <Flex>
            <div className="pt-[170px] mb-[150px]">
              <Flex className={"gap-[10px]"}>
                <span className="bg-[#683292] w-[44px] h-[3px] mt-4"></span>
                <Heading
                  text={"Welcome to The"}
                  as={"h3"}
                  className={"font-fnt text-[#0F0200] text-[25px]"}
                />
              </Flex>
              <HeadingA
                text={"Discover #Sweet# Delights"}
                className={"font-fnt text-[112px]"}
              />
              <Heading
                text={
                  "Relish the timeless taste of handcrafted ice cream, made with passion and the finest ingredients."
                }
                as={"p"}
                className={"text-[22px] text-pclr pr-[160px pb-[40px]"}
              />
              <Button
                btnText={"Browse Our Classic Flavors"}
                className={
                  "bg-[#683292] text-txtclr font-pop w-[305px] h-[62px] rounded-[30px] "
                }
              />
            </div>
            <div className="pt-[37px] w-[70%]">
              <Image src={BannerImg} alt={BannerImg} className={"scale-100"} />
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  </>
);
const Explor = () => (
  <>
    <div id="clck" className="bg-clasicBg  bg-cover bg-no-repeat bg-center">
      <Container className={"max-w-[1320px]"}>
        <Flex className={"gap-[83px]"}>
          <div className="w-1/2">
            <Image src={ClassicImg} alt={ClassicImg} />
          </div>
          <div className="w-1/2">
            <HeadingA
              text={" Relive the Sweet Memories of Classic #Ice Creams#"}
              className={"text-[48px] font-fnt pt-[150px] px-[76px]"}
            />
            <Heading
              text={
                "From rich chocolate fudge to creamy vanilla sundaes, discover our menu of classic ice cream creations."
              }
              as={"p"}
              className={"px-[78px] mr-[30px] pb-[36px]"}
            />
            <Button
              btnText={"Explore Our Menu"}
              className={
                "bg-btnclr w-[238px] h-[62px] text-txtclr rounded-[30px] ml-[75px] "
              }
            />
          </div>
        </Flex>
      </Container>
    </div>
  </>
);
const Classic = () => (
  <>
    <div
      id="prduct"
      className="bg-prdctBg py-[100px] bg-cover bg-no-repeat bg-center"
    >
      <Container className={"max-w-[1320px]"}>
        <div className=" text-center">
          <HeadingA
            text={"Our #Classic# Favorites"}
            className={"text-pclr font-fnt text-[60px] "}
          />
          <Heading
            text={"Check out our top products that our customers love."}
            as={"p"}
            className={"text-5 font-pop text-p2clr pb-[70px]"}
          />
        </div>
        <Flex className={"justify-between"}>
          <div className="bg-txtclr rounded-[20px] p-2 w-[23%]">
            <div className="">
              <Image
                src={Product1}
                alt={Product1}
                className={"w-full pb-[20px] relative"}
              />
              <div className="absolute w-12 h-12 flex items-center justify-center cursor-pointer bg-white rounded-full -translate-y-[307px] -translate-x-[-10px] ">
                <CiHeart className={"w-8 h-8"} />
              </div>
            </div>
            <Flex className={"items-center "}>
              <Heading
                text={"Chocolate Brownie Sundae"}
                as={"h5"}
                className={"font-bold text-[20px] pr-[66px]"}
              />
              <svg
                width="25"
                height="20"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.65039 0.921875C6.93164 0.359375 7.72852 0.382812 7.98633 0.921875L9.5332 4.03906L12.9551 4.53125C13.5645 4.625 13.7988 5.375 13.3535 5.82031L10.8926 8.23438L11.4785 11.6328C11.5723 12.2422 10.916 12.7109 10.377 12.4297L7.33008 10.8125L4.25977 12.4297C3.7207 12.7109 3.06445 12.2422 3.1582 11.6328L3.74414 8.23438L1.2832 5.82031C0.837891 5.375 1.07227 4.625 1.68164 4.53125L5.12695 4.03906L6.65039 0.921875Z"
                  fill="#FBAB2A"
                />
              </svg>
              <Heading text={"4.9/5"} as={"p"} className={"text-pclr px-1"} />
            </Flex>
            <Heading
              text={"Rich chocolate ice cream with chunks of brownie."}
              as={"p"}
              className={"text-4 font-pop text-p2clr pt-[20px] pb-[20px]"}
            />
            <Flex className={"justify-between mb-3"}>
              <Heading
                text={"$5.49"}
                as={"p"}
                className={"text-btnclr text-[22px] font-bold pt-2"}
              />
              <div className="w-[46px] h-[46px] cursor-pointer rounded-full bg-icnbg relative mb-4 ">
                <IoCartOutline className="-translate-x-1/2 translate-y-1/2 top-1.5 left-1/2 absolute text-white" />
              </div>
            </Flex>
          </div>
          <div className="bg-txtclr rounded-[20px] p-2 w-[23%]">
            <Image
              src={Product2}
              alt={Product2}
              className={"w-full pb-[20px]"}
            />
            <Flex className={"items-center "}>
              <Heading
                text={"Strawberry Shortcake"}
                as={"h5"}
                className={"font-bold text-[20px] pr-[66px]"}
              />
              <svg
                width="25"
                height="20"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.65039 0.921875C6.93164 0.359375 7.72852 0.382812 7.98633 0.921875L9.5332 4.03906L12.9551 4.53125C13.5645 4.625 13.7988 5.375 13.3535 5.82031L10.8926 8.23438L11.4785 11.6328C11.5723 12.2422 10.916 12.7109 10.377 12.4297L7.33008 10.8125L4.25977 12.4297C3.7207 12.7109 3.06445 12.2422 3.1582 11.6328L3.74414 8.23438L1.2832 5.82031C0.837891 5.375 1.07227 4.625 1.68164 4.53125L5.12695 4.03906L6.65039 0.921875Z"
                  fill="#FBAB2A"
                />
              </svg>
              <Heading text={"4.9/5"} as={"p"} className={"text-pclr px-1"} />
            </Flex>
            <Heading
              text={"Strawberry ice cream layered with shortcake"}
              as={"p"}
              className={
                "text-4 font-pop pr-[20px] text-p2clr pt-[20px] pb-[20px]"
              }
            />
            <Flex className={"justify-between mb-3"}>
              <Heading
                text={"$5.29"}
                as={"p"}
                className={"text-btnclr text-[22px] font-bold pt-2"}
              />
              <div className="w-[46px] cursor-pointer h-[46px] rounded-full bg-icnbg relative mb-4 ">
                <IoCartOutline className="-translate-x-1/2 translate-y-1/2 top-1.5 left-1/2 absolute text-white" />
              </div>
            </Flex>
          </div>
          <div className="bg-txtclr rounded-[20px] p-2 w-[23%]">
            <Image
              src={Product3}
              alt={Product3}
              className={"w-full pb-[20px]"}
            />
            <Flex className={"items-center "}>
              <Heading
                text={"Mint Chocolate Chip Cone"}
                as={"h5"}
                className={"font-bold text-[20px] pr-[66px]"}
              />
              <svg
                width="25"
                height="20"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.65039 0.921875C6.93164 0.359375 7.72852 0.382812 7.98633 0.921875L9.5332 4.03906L12.9551 4.53125C13.5645 4.625 13.7988 5.375 13.3535 5.82031L10.8926 8.23438L11.4785 11.6328C11.5723 12.2422 10.916 12.7109 10.377 12.4297L7.33008 10.8125L4.25977 12.4297C3.7207 12.7109 3.06445 12.2422 3.1582 11.6328L3.74414 8.23438L1.2832 5.82031C0.837891 5.375 1.07227 4.625 1.68164 4.53125L5.12695 4.03906L6.65039 0.921875Z"
                  fill="#FBAB2A"
                />
              </svg>
              <Heading text={"4.9/5"} as={"p"} className={"text-pclr px-1"} />
            </Flex>
            <Heading
              text={"Refreshing mint ice cream with chocolate chips."}
              as={"p"}
              className={"text-4 font-pop  text-p2clr pt-[20px] pb-[20px]"}
            />
            <Flex className={"justify-between mb-3"}>
              <Heading
                text={"$3.99"}
                as={"p"}
                className={"text-btnclr text-[22px] font-bold pt-2"}
              />
              <div className="w-[46px] h-[46px] cursor-pointer rounded-full bg-icnbg relative mb-4 ">
                <IoCartOutline className="-translate-x-1/2 translate-y-1/2 top-1.5 left-1/2 absolute text-white" />
              </div>
            </Flex>
          </div>
          <div className="bg-txtclr rounded-[20px] p-2 w-[23%]">
            <Image
              src={Product4}
              alt={Product4}
              className={"w-full pb-[20px]"}
            />
            <Flex className={"items-center "}>
              <Heading
                text={"Classic Vanilla Ice Cream"}
                as={"h5"}
                className={"font-bold text-[20px] pr-[80px]"}
              />
              <svg
                width="25"
                height="20"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.65039 0.921875C6.93164 0.359375 7.72852 0.382812 7.98633 0.921875L9.5332 4.03906L12.9551 4.53125C13.5645 4.625 13.7988 5.375 13.3535 5.82031L10.8926 8.23438L11.4785 11.6328C11.5723 12.2422 10.916 12.7109 10.377 12.4297L7.33008 10.8125L4.25977 12.4297C3.7207 12.7109 3.06445 12.2422 3.1582 11.6328L3.74414 8.23438L1.2832 5.82031C0.837891 5.375 1.07227 4.625 1.68164 4.53125L5.12695 4.03906L6.65039 0.921875Z"
                  fill="#FBAB2A"
                />
              </svg>
              <Heading text={"4.9/5"} as={"p"} className={"text-pclr px-1"} />
            </Flex>
            <Heading
              text={"Creamy vanilla ice cream topped with cherry."}
              as={"p"}
              className={
                "text-4 font-pop text-p2clr pt-[20px] pr-[50px] pb-[20px]"
              }
            />
            <Flex className={"justify-between mb-3"}>
              <Heading
                text={"$4.99"}
                as={"p"}
                className={"text-btnclr text-[22px] font-bold pt-2"}
              />
              <div className="w-[46px] h-[46px] rounded-full bg-icnbg relative mb-4 cursor-pointer ">
                <IoCartOutline className="-translate-x-1/2  translate-y-1/2 top-1.5 left-1/2 absolute text-white" />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  </>
);

const Categories = () => (
  <>
    <div
      id="prduct"
      className="bg-txtclr py-[100px] bg-cover bg-no-repeat bg-center"
    >
      <Container className={"max-w-[1320px]"}>
        <div className=" text-center">
          <HeadingA
            text={" Explore Our #Categories#"}
            className={"text-pclr font-fnt text-[60px]"}
          />
          <Heading
            text={
              "Browse through our different categories to find your favorite ice cream treats."
            }
            as={"p"}
            className={"text-5 font-pop text-p2clr pb-[70px]"}
          />
        </div>
        <Flex className={"justify-between"}>
          <div className="bg-txtclr rounded-[20px]  w-[23%] relative">
            <Image
              src={Categories1}
              alt={Categories1}
              className={"w-full pb-[20px]"}
            />
            <div className="absolute cursor-pointer w-[286px] h-[56px] left-1/2 top-14 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-[16px]">
              <Flex className={"justify-between relative "}>
                <Heading
                  text={"Sundaes"}
                  as={"p"}
                  className={
                    "font-bold text-[15px] top-4 absolute items-center flex px-2"
                  }
                />
                <Button
                  btnText={
                    <TiArrowRightThick className="text-white absolute top-3 left-3 h-4 w-4" />
                  }
                  className={
                    "bg-btnclr rounded-full h-[40px] w-[40px] absolute top-2 right-2"
                  }
                />
              </Flex>
            </div>
          </div>
          <div className="bg-txtclr cursor-pointer rounded-[20px]  w-[23%] relative">
            <Image
              src={Categories2}
              alt={Categories2}
              className={"w-full pb-[20px]"}
            />
            <div className="absolute w-[286px] h-[56px] left-1/2 bottom-2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-[16px]">
              <Flex className={"justify-between relative"}>
                <Heading
                  text={"Ice Cream Cones"}
                  as={"p"}
                  className={
                    "font-bold text-[15px] top-4 absolute items-center flex px-2"
                  }
                />
                <Button
                  btnText={
                    <TiArrowRightThick className="text-white absolute top-3 left-3 h-4 w-4" />
                  }
                  className={
                    "bg-btnclr rounded-full h-[40px] w-[40px] absolute top-2 right-2"
                  }
                />
              </Flex>
            </div>
          </div>
          <div className="bg-txtclr cursor-pointer rounded-[20px]  w-[23%] relative">
            <Image
              src={Categories3}
              alt={Categories3}
              className={"w-full pb-[20px]"}
            />
            <div className="absolute w-[286px] h-[56px] left-1/2 bottom-2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-[16px]">
              <Flex className={"justify-between relative"}>
                <Heading
                  text={"Milkshakes"}
                  as={"p"}
                  className={
                    "font-bold text-[15px] top-4 absolute items-center flex px-2"
                  }
                />
                <Button
                  btnText={
                    <TiArrowRightThick className="text-white absolute top-3 left-3 h-4 w-4" />
                  }
                  className={
                    "bg-btnclr rounded-full h-[40px] w-[40px] absolute top-2 right-2"
                  }
                />
              </Flex>
            </div>
          </div>
          <div className="bg-txtclr cursor-pointer rounded-[20px]  w-[23%] relative">
            <Image
              src={Categories4}
              alt={Categories4}
              className={"w-full pb-[20px]"}
            />
            <div className="absolute w-[286px] h-[56px] left-1/2 bottom-2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-[16px]">
              <Flex className={"justify-between relative"}>
                <Heading
                  text={"Seasonal Flavors"}
                  as={"p"}
                  className={
                    "font-bold text-[15px] top-4 absolute items-center flex px-2"
                  }
                />
                <Button
                  btnText={
                    <TiArrowRightThick className="text-white absolute top-3 left-3 h-4 w-4" />
                  }
                  className={
                    "bg-btnclr rounded-full h-[40px] w-[40px] absolute top-2 right-2"
                  }
                />
              </Flex>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  </>
);

const Offer = () => (
  <>
    <div id="offr" className="bg-offrBg bg-cover bg-center bg-no-repeat">
      <Container className={"max-w-[1320px]"}>
        <div className="pt-[140px] pb-[200px] ml-[120px]">
          <Heading
            text={"Summer Special!"}
            as={"h2"}
            className={"text-white pr-[515px]  text-[112px] pb-[17px]"}
          />
          <Heading
            text={"Buy One Sundae, Get One 50% Off!"}
            as={"p"}
            className={"text-[30px] text-white"}
          />
          <Flex className={"items-center gap-3 pt-[36px]  text-white"}>
            <div className="relative">
              <Button
                btnText={"Get This Deal"}
                className={
                  "bg-btnclr w-[210px] h-[62px] text-4  text-txtclr rounded-[30px]"
                }
              />
              <span className="absolute cursor-pointer right-7 top-6">
                <TiArrowRightThick />
              </span>
            </div>
            <Heading
              text={"Use code: SUMMER50 at checkout."}
              as={"p"}
              className={""}
            />
          </Flex>
        </div>
      </Container>
    </div>
    /
  </>
);

const Saller = () => (
  <>
    <div id="prduct" className="bg-white py-[70px] ">
      <Container className={"max-w-[1150px]"}>
        <div className=" text-center">
          <HeadingA
            text={"Our #Best# Sellers"}
            className={"text-pclr font-fnt text-[60px] "}
          />
          <Heading
            text={
              "Discover the favorites that keep our customers coming back for more."
            }
            as={"p"}
            className={"text-5 font-pop text-p2clr pb-[70px]"}
          />
        </div>
        <Flex className={"justify-between"}>
          <div className="bg-txtclr rounded-[20px] p-2 w-[23%]">
            <Image
              src={SellerImg1}
              alt={SellerImg1}
              className={"w-full pb-[20px]"}
            />
            <Flex className={"items-center "}>
              <Heading
                text={"Chocolate Chip Cookie Cone"}
                as={"h5"}
                className={"font-bold text-[20px]"}
              />
              <svg
                width="25"
                height="20"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.65039 0.921875C6.93164 0.359375 7.72852 0.382812 7.98633 0.921875L9.5332 4.03906L12.9551 4.53125C13.5645 4.625 13.7988 5.375 13.3535 5.82031L10.8926 8.23438L11.4785 11.6328C11.5723 12.2422 10.916 12.7109 10.377 12.4297L7.33008 10.8125L4.25977 12.4297C3.7207 12.7109 3.06445 12.2422 3.1582 11.6328L3.74414 8.23438L1.2832 5.82031C0.837891 5.375 1.07227 4.625 1.68164 4.53125L5.12695 4.03906L6.65039 0.921875Z"
                  fill="#FBAB2A"
                />
              </svg>
              <Heading text={"4.9/5"} as={"p"} className={"text-pclr px-1"} />
            </Flex>
            <Heading
              text={"Chocolate chip cookie dough ice cream in a cone."}
              as={"p"}
              className={"text-2 font-pop text-p2clr pt-[20px] pb-[20px]"}
            />
            <Flex className={"justify-between mb-3"}>
              <Heading
                text={"$4.49"}
                as={"p"}
                className={"text-btnclr text-[22px] font-bold pt-2"}
              />
              <div className="w-[46px] h-[46px] cursor-pointer rounded-full bg-icnbg relative mb-1 ">
                <IoCartOutline className="-translate-x-1/2 translate-y-1/2 top-1.5 left-1/2 absolute text-white" />
              </div>
            </Flex>
          </div>
          <div className="bg-txtclr rounded-[20px] p-2 w-[23%]">
            <Image
              src={SellerImg2}
              alt={SellerImg2}
              className={"w-full pb-[20px]"}
            />
            <Flex className={"items-center "}>
              <Heading
                text={"Rocky Road Sundae"}
                as={"h5"}
                className={"font-bold text-[20px] "}
              />
              <svg
                width="25"
                height="20"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.65039 0.921875C6.93164 0.359375 7.72852 0.382812 7.98633 0.921875L9.5332 4.03906L12.9551 4.53125C13.5645 4.625 13.7988 5.375 13.3535 5.82031L10.8926 8.23438L11.4785 11.6328C11.5723 12.2422 10.916 12.7109 10.377 12.4297L7.33008 10.8125L4.25977 12.4297C3.7207 12.7109 3.06445 12.2422 3.1582 11.6328L3.74414 8.23438L1.2832 5.82031C0.837891 5.375 1.07227 4.625 1.68164 4.53125L5.12695 4.03906L6.65039 0.921875Z"
                  fill="#FBAB2A"
                />
              </svg>
              <Heading text={"4.9/5"} as={"p"} className={"text-pclr px-1"} />
            </Flex>
            <Heading
              text={"Marshmallow and nutty rocky road ice cream"}
              as={"p"}
              className={
                "text-4 font-pop pr-[20px] text-p2clr pt-[20px] pb-[20px]"
              }
            />
            <Flex className={"justify-between mb-3"}>
              <Heading
                text={"$5.69"}
                as={"p"}
                className={"text-btnclr text-[22px] font-bold pt-2"}
              />
              <div className="w-[46px] cursor-pointer h-[46px] rounded-full bg-icnbg relative mb-1 ">
                <IoCartOutline className="-translate-x-1/2 translate-y-1/2 top-1.5 left-1/2 absolute text-white" />
              </div>
            </Flex>
          </div>
          <div className="bg-txtclr rounded-[20px] p-2 w-[23%]">
            <Image
              src={SellerImg3}
              alt={SellerImg3}
              className={"w-full pb-[20px]"}
            />
            <Flex className={"items-center "}>
              <Heading
                text={"Peach Melba Sundae"}
                as={"h5"}
                className={"font-bold text-[20px]"}
              />
              <svg
                width="25"
                height="20"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.65039 0.921875C6.93164 0.359375 7.72852 0.382812 7.98633 0.921875L9.5332 4.03906L12.9551 4.53125C13.5645 4.625 13.7988 5.375 13.3535 5.82031L10.8926 8.23438L11.4785 11.6328C11.5723 12.2422 10.916 12.7109 10.377 12.4297L7.33008 10.8125L4.25977 12.4297C3.7207 12.7109 3.06445 12.2422 3.1582 11.6328L3.74414 8.23438L1.2832 5.82031C0.837891 5.375 1.07227 4.625 1.68164 4.53125L5.12695 4.03906L6.65039 0.921875Z"
                  fill="#FBAB2A"
                />
              </svg>
              <Heading text={"4.9/5"} as={"p"} className={"text-pclr px-1"} />
            </Flex>
            <Heading
              text={"Peach ice cream topped with raspberry sauce"}
              as={"p"}
              className={"text-4 font-pop  text-p2clr pt-[20px] pb-[20px]"}
            />
            <Flex className={"justify-between mb-3"}>
              <Heading
                text={"$5.39"}
                as={"p"}
                className={"text-btnclr text-[22px] font-bold pt-2"}
              />
              <div className="w-[46px] h-[46px] rounded-full bg-icnbg relative cursor-pointer mb-1 ">
                <IoCartOutline className="-translate-x-1/2 translate-y-1/2 top-1.5 left-1/2  absolute text-white" />
              </div>
            </Flex>
          </div>
          <div className="bg-txtclr rounded-[20px] p-2 w-[23%]">
            <Image
              src={SellerImg4}
              alt={SellerImg4}
              className={"w-full pb-[20px]"}
            />
            <Flex className={"items-center "}>
              <Heading
                text={"Strawberry Sundae"}
                as={"h5"}
                className={"font-bold text-[20px]"}
              />
              <svg
                width="25"
                height="20"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.65039 0.921875C6.93164 0.359375 7.72852 0.382812 7.98633 0.921875L9.5332 4.03906L12.9551 4.53125C13.5645 4.625 13.7988 5.375 13.3535 5.82031L10.8926 8.23438L11.4785 11.6328C11.5723 12.2422 10.916 12.7109 10.377 12.4297L7.33008 10.8125L4.25977 12.4297C3.7207 12.7109 3.06445 12.2422 3.1582 11.6328L3.74414 8.23438L1.2832 5.82031C0.837891 5.375 1.07227 4.625 1.68164 4.53125L5.12695 4.03906L6.65039 0.921875Z"
                  fill="#FBAB2A"
                />
              </svg>
              <Heading text={"4.9/5"} as={"p"} className={"text-pclr px-1"} />
            </Flex>
            <Heading
              text={"Strawberry ice cream with fresh strawberries"}
              as={"p"}
              className={"text-4 font-pop text-p2clr pt-[20px]  pb-[20px]"}
            />
            <Flex className={"justify-between mb-3"}>
              <Heading
                text={"$5.99"}
                as={"p"}
                className={"text-btnclr text-[22px] font-bold pt-2"}
              />
              <div className="w-[46px] h-[46px] rounded-full bg-icnbg relative cursor-pointer mb-1 ">
                <IoCartOutline className="-translate-x-1/2 translate-y-1/2  top-1.5 left-1/2 absolute text-white" />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  </>
);

const Review = () => (
  <>
    <div id="rivw" className=" bg-revwBg">
      <Container className={"max-w-[1320px]"}>
        <div className="text-center pt-[100px] pb-[200px]">
          <HeadingA
            text={" Hear from Our #Happy Ice Cream# Lovers"}
            className={"text-pclr text-[60px]  pb-[100px] font-fnt px-[340px]"}
          />
          <Heading
            text={
              "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas as pernatur aut odit aut fugit, sed beatae vitae dicta ripiscing elit, sed do euismod tempor incidunt. Labore et dolore magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor incidunt aut labore. "
            }
            as={"p"}
            className={"px-[355px] text-pclr"}
          />
          <HeadingA text={"#Kevin Andrew#"} className={"pt-[60px]"} />
          <Heading
            text={"Happy Customer"}
            as={"p"}
            className={"text-p2clr pt-3"}
          />
          <div className="justify-center flex pt-3 gap-1">
            <svg
              width="25"
              height="20"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.65039 0.921875C6.93164 0.359375 7.72852 0.382812 7.98633 0.921875L9.5332 4.03906L12.9551 4.53125C13.5645 4.625 13.7988 5.375 13.3535 5.82031L10.8926 8.23438L11.4785 11.6328C11.5723 12.2422 10.916 12.7109 10.377 12.4297L7.33008 10.8125L4.25977 12.4297C3.7207 12.7109 3.06445 12.2422 3.1582 11.6328L3.74414 8.23438L1.2832 5.82031C0.837891 5.375 1.07227 4.625 1.68164 4.53125L5.12695 4.03906L6.65039 0.921875Z"
                fill="#FBAB2A"
              />
            </svg>
            <svg
              width="25"
              height="20"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.65039 0.921875C6.93164 0.359375 7.72852 0.382812 7.98633 0.921875L9.5332 4.03906L12.9551 4.53125C13.5645 4.625 13.7988 5.375 13.3535 5.82031L10.8926 8.23438L11.4785 11.6328C11.5723 12.2422 10.916 12.7109 10.377 12.4297L7.33008 10.8125L4.25977 12.4297C3.7207 12.7109 3.06445 12.2422 3.1582 11.6328L3.74414 8.23438L1.2832 5.82031C0.837891 5.375 1.07227 4.625 1.68164 4.53125L5.12695 4.03906L6.65039 0.921875Z"
                fill="#FBAB2A"
              />
            </svg>
            <svg
              width="25"
              height="20"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.65039 0.921875C6.93164 0.359375 7.72852 0.382812 7.98633 0.921875L9.5332 4.03906L12.9551 4.53125C13.5645 4.625 13.7988 5.375 13.3535 5.82031L10.8926 8.23438L11.4785 11.6328C11.5723 12.2422 10.916 12.7109 10.377 12.4297L7.33008 10.8125L4.25977 12.4297C3.7207 12.7109 3.06445 12.2422 3.1582 11.6328L3.74414 8.23438L1.2832 5.82031C0.837891 5.375 1.07227 4.625 1.68164 4.53125L5.12695 4.03906L6.65039 0.921875Z"
                fill="#FBAB2A"
              />
            </svg>
            <svg
              width="25"
              height="20"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.65039 0.921875C6.93164 0.359375 7.72852 0.382812 7.98633 0.921875L9.5332 4.03906L12.9551 4.53125C13.5645 4.625 13.7988 5.375 13.3535 5.82031L10.8926 8.23438L11.4785 11.6328C11.5723 12.2422 10.916 12.7109 10.377 12.4297L7.33008 10.8125L4.25977 12.4297C3.7207 12.7109 3.06445 12.2422 3.1582 11.6328L3.74414 8.23438L1.2832 5.82031C0.837891 5.375 1.07227 4.625 1.68164 4.53125L5.12695 4.03906L6.65039 0.921875Z"
                fill="#FBAB2A"
              />
            </svg>
            <svg
              width="25"
              height="20"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.65039 0.921875C6.93164 0.359375 7.72852 0.382812 7.98633 0.921875L9.5332 4.03906L12.9551 4.53125C13.5645 4.625 13.7988 5.375 13.3535 5.82031L10.8926 8.23438L11.4785 11.6328C11.5723 12.2422 10.916 12.7109 10.377 12.4297L7.33008 10.8125L4.25977 12.4297C3.7207 12.7109 3.06445 12.2422 3.1582 11.6328L3.74414 8.23438L1.2832 5.82031C0.837891 5.375 1.07227 4.625 1.68164 4.53125L5.12695 4.03906L6.65039 0.921875Z"
                fill="#FBAB2A"
              />
            </svg>
          </div>
        </div>
      </Container>
    </div>
  </>
);

const Signin = () => (
  <>
    <div id="signup" className="bg-signupBg bg-cover bg-no-repeat bg-center">
      <Container className={"max-w-[1050px]"}>
        <div className="pt-[100px] pb-[100px] text-center">
          <HeadingA
            text={" Sign up For #Exclusive Deals# and Updates"}
            className={
              "font-fnt text-[60px] leading-[64px] pb-[30px] px-[160px]"
            }
          />
          <p className="text-p2clr text-[20px]">
            Get 10% off your next order and stay updated with our latest offers.
          </p>
          <Flex
            className={"text-center gap-2 items-center ml-[270px] pt-4 mb-10"}
          >
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-[420px] h-[62px] pl-6 outline-none rounded-[30px] bg-[#FFEFD8]"
            />
            <div className="relative">
              <Button
                btnText={"Subscribe"}
                className={
                  "bg-btnclr w-[210px] h-[62px] text-4 text-txtclr rounded-[30px]"
                }
              />
              <span className="absolute cursor-pointer text-white right-7 top-6">
                <TiArrowRightThick />
              </span>
            </div>
          </Flex>
          <Flex className={"justify-center gap-2"}>
            <input
              type="checkbox"
              className=" w-6 h-6 rounded-full bg-[#E8E8E8]"
            />
            <p className="">
              I agree to the{" "}
              <span className="text-btnclr border-b-1 border-b-btnclr">
                Privacy Policy.
              </span>
            </p>
          </Flex>
        </div>
      </Container>
    </div>
  </>
);

const Flow = () => (
  <>
    <div id="revew" className="bg-RevwBg py-16">
      <Container className={"max-w-[1320px] "}>
        <div className="text-center">
          <HeadingA
            text={" Follow Us on #Instagram#"}
            className={"text-[60px] font-fnt"}
          />
          <Heading
            text={
              "Join our Instagram community for updates, special deals, and more!"
            }
            className={"text-p2clr text-[20px]"}
            as={"p"}
          />
        </div>
        <div className="mt-8">
          <Flex className={"justify-center gap-4"}>
            <Image src={Instagram1} alt={Instagram1} />
            <Image src={Instagram2} alt={Instagram2} />
            <Image src={Instagram3} alt={Instagram3} />
            <Image src={Instagram4} alt={Instagram4} />
            <Image src={Instagram5} alt={Instagram5} />
          </Flex>
        </div>
      </Container>
    </div>
  </>
);

const Fotter = () => (
  <>
    <div id="ftr" className="bg-ftrBg py-16">
      <Container className={"max-w-[1050px]"}>
        <div className="">
          <Flex className={"pb-[100px]"}>
            <div className="pr-[66px] pt-1">
              <Image src={logoA} alt={logoA} />
            </div>
            <div className="">
              <Heading
                text={"Navigation"}
                as={"h4"}
                className={
                  "font-semibold text-[18px] font-pop text-white pb-[25px]"
                }
              />
              <Flex className={"gap-[48px] text-fmenuclr"}>
                <div className="">
                  <Menu mText={"Home"} className={"list-disc "} />
                  <Menu mText={"About"} className={"list-disc py-[48px]"} />
                  <Menu mText={"Shop"} className={"list-disc"} />
                </div>
                <div className="">
                  <Menu mText={"Prodects"} className={"list-disc"} />
                  <Menu mText={"Blog"} className={"list-disc py-[48px]"} />
                  <Menu mText={"Contact"} className={"list-disc"} />
                </div>
              </Flex>
            </div>
            <div className="">
              <div className="">
                <Flex className={"gap-[22px] ml-[108px]"}>
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="46"
                      height="46"
                      rx="23"
                      fill="white"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M22.5437 30.6875C17.9812 24.125 17.1687 23.4375 17.1687 21C17.1687 17.6875 19.825 15 23.1687 15C26.4812 15 29.1687 17.6875 29.1687 21C29.1687 23.4375 28.325 24.125 23.7625 30.6875C23.4812 31.125 22.825 31.125 22.5437 30.6875ZM23.1687 23.5C24.5437 23.5 25.6687 22.4062 25.6687 21C25.6687 19.625 24.5437 18.5 23.1687 18.5C21.7625 18.5 20.6687 19.625 20.6687 21C20.6687 22.4062 21.7625 23.5 23.1687 23.5Z"
                      fill="white"
                    />
                  </svg>
                  <div className="text-fmenuclr">
                    <Heading
                      text={"Address:"}
                      as={"h6"}
                      className={"text-[16px] font-semibold text-white"}
                    />
                    <Heading
                      text={"121 King Street Melbourne, 3000, Australia"}
                      as={"p"}
                      className={"text-[14px]"}
                    />
                  </div>
                </Flex>
                <div className="ml-[108px] pt-[60px]">
                  <Flex className={"gap-[22px]"}>
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="46"
                        height="46"
                        rx="23"
                        fill="white"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M20.6938 21.75C20.4125 21.75 20.1938 21.5312 20.1938 21.25V20.75C20.1938 20.5 20.4125 20.25 20.6938 20.25H25.6938C25.9438 20.25 26.1938 20.5 26.1938 20.75V21.25C26.1938 21.5312 25.9438 21.75 25.6938 21.75H20.6938ZM20.1938 24.25V23.75C20.1938 23.5 20.4125 23.25 20.6938 23.25H25.6938C25.9438 23.25 26.1938 23.5 26.1938 23.75V24.25C26.1938 24.5312 25.9438 24.75 25.6938 24.75H20.6938C20.4125 24.75 20.1938 24.5312 20.1938 24.25ZM23.1938 28.0625C23.6938 28.0625 24.1938 27.9062 24.6313 27.5625L31.1938 22.8438V29.5C31.1938 30.3438 30.5063 31 29.6938 31H16.6938C15.85 31 15.1938 30.3438 15.1938 29.5V22.8438L21.725 27.5625C22.1625 27.9062 22.6625 28.0625 23.1938 28.0625ZM30.6 20.0938C30.975 20.4062 31.1938 20.8125 31.1938 21.2812V21.625L28.1938 23.7812V18H18.1938V23.7812L15.1938 21.625V21.2812C15.1938 20.8125 15.4125 20.375 15.7563 20.0938C16.0375 19.9062 16.2875 19.6875 16.6938 19.4062V18C16.6938 17.1875 17.35 16.5 18.1938 16.5H20.6C20.6938 16.4375 20.7875 16.375 20.8813 16.3125C21.4125 15.9375 22.4438 15 23.1938 15C23.9125 15 24.9438 15.9375 25.475 16.3125C25.5688 16.375 25.6625 16.4375 25.7563 16.5H28.1938C29.0063 16.5 29.6938 17.1875 29.6938 18V19.4062C30.0688 19.6875 30.3188 19.9062 30.6 20.0938Z"
                        fill="white"
                      />
                    </svg>

                    <div>
                      <Heading
                        text={"Email:"}
                        as={"p"}
                        className={"text-white text-[16px] font-semibold"}
                      />
                      <Heading
                        text={"info@example.com:"}
                        as={"p"}
                        className={"text-fmenuclr text-[14px]"}
                      />
                    </div>
                  </Flex>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <Flex className={"gap-3 pb-[30px]"}>
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.8867 2.21484C30.5312 2.39062 31 2.91797 31 3.5625C31 18.6211 18.8125 30.75 3.8125 30.75C3.10938 30.75 2.58203 30.3398 2.40625 29.6953L1 23.6016C0.882812 22.957 1.17578 22.2539 1.82031 21.9609L8.38281 19.1484C8.96875 18.9141 9.61328 19.0898 10.0234 19.5586L12.9531 23.1328C17.5234 20.9648 21.2148 17.2148 23.3242 12.7617L19.75 9.83203C19.2812 9.42188 19.1055 8.77734 19.3398 8.19141L22.1523 1.62891C22.4453 0.984375 23.1484 0.632812 23.793 0.808594L29.8867 2.21484Z"
                      fill="white"
                    />
                  </svg>
                  <div className="">
                    <Heading
                      text={"+123456780123"}
                      as={"p"}
                      className={"text-white text-[16px] font-semibold"}
                    />
                    <Heading
                      text={"+Got Questions? Call us 24/7"}
                      as={"p"}
                      className={"text-fmenuclr text-[14px]"}
                    />
                  </div>
                </Flex>
              </div>
              <div className="">
                <Flex className={"gap-2"}>
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="46"
                      height="46"
                      rx="23"
                      fill="white"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M26.875 24H24.5312V31H21.4062V24H18.8438V21.125H21.4062V18.9062C21.4062 16.4062 22.9062 15 25.1875 15C26.2812 15 27.4375 15.2188 27.4375 15.2188V17.6875H26.1562C24.9062 17.6875 24.5312 18.4375 24.5312 19.25V21.125H27.3125L26.875 24Z"
                      fill="white"
                    />
                  </svg>
                  {/* Second Icon Start */}
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="46"
                      height="46"
                      rx="23"
                      fill="white"
                      fillOpacity="0.1"
                    />
                  </svg>
                  {/* Third Icon  Start*/}
                  <svg
                    width="47"
                    height="46"
                    viewBox="0 0 47 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.720703"
                      width="46"
                      height="46"
                      rx="23"
                      fill="white"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M23.902 19.4062C25.8707 19.4062 27.4957 21.0312 27.4957 23C27.4957 25 25.8707 26.5938 23.902 26.5938C21.902 26.5938 20.3082 25 20.3082 23C20.3082 21.0312 21.902 19.4062 23.902 19.4062ZM23.902 25.3438C25.1832 25.3438 26.2145 24.3125 26.2145 23C26.2145 21.7188 25.1832 20.6875 23.902 20.6875C22.5895 20.6875 21.5582 21.7188 21.5582 23C21.5582 24.3125 22.6207 25.3438 23.902 25.3438ZM28.4645 19.2812C28.4645 19.75 28.0895 20.125 27.6207 20.125C27.152 20.125 26.777 19.75 26.777 19.2812C26.777 18.8125 27.152 18.4375 27.6207 18.4375C28.0895 18.4375 28.4645 18.8125 28.4645 19.2812ZM30.8395 20.125C30.902 21.2812 30.902 24.75 30.8395 25.9062C30.777 27.0312 30.527 28 29.7145 28.8438C28.902 29.6562 27.902 29.9062 26.777 29.9688C25.6207 30.0312 22.152 30.0312 20.9957 29.9688C19.8707 29.9062 18.902 29.6562 18.0582 28.8438C17.2457 28 16.9957 27.0312 16.9332 25.9062C16.8707 24.75 16.8707 21.2812 16.9332 20.125C16.9957 19 17.2457 18 18.0582 17.1875C18.902 16.375 19.8707 16.125 20.9957 16.0625C22.152 16 25.6207 16 26.777 16.0625C27.902 16.125 28.902 16.375 29.7145 17.1875C30.527 18 30.777 19 30.8395 20.125ZM29.3395 27.125C29.7145 26.2188 29.6207 24.0312 29.6207 23C29.6207 22 29.7145 19.8125 29.3395 18.875C29.0895 18.2812 28.6207 17.7812 28.027 17.5625C27.0895 17.1875 24.902 17.2812 23.902 17.2812C22.8707 17.2812 20.6832 17.1875 19.777 17.5625C19.152 17.8125 18.6832 18.2812 18.4332 18.875C18.0582 19.8125 18.152 22 18.152 23C18.152 24.0312 18.0582 26.2188 18.4332 27.125C18.6832 27.75 19.152 28.2188 19.777 28.4688C20.6832 28.8438 22.8707 28.75 23.902 28.75C24.902 28.75 27.0895 28.8438 28.027 28.4688C28.6207 28.2188 29.1207 27.75 29.3395 27.125Z"
                      fill="white"
                    />
                  </svg>
                  {/* All Icon End */}
                </Flex>
              </div>
            </div>
          </Flex>
          <div className="">
            <hr className="text" />
            <Heading
              text={
                "Copyright © 2024 BlackRise Themes Inc All rights reserved."
              }
              as={"p"}
              className={"text-fmenuclr text-center py-[18px]"}
            />
          </div>
        </div>
      </Container>
    </div>
  </>
);

function App() {
  return (
    <>
      <NavandBannr />
      <Classic />
      <Categories />
      <Offer />
      <Saller />
      <Review />
      <Signin />
      <Flow />
      <Fotter />
    </>
  );
}

export default App;
