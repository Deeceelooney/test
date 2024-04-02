import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img, TextArea, Input } from "../../components";
import Header from "../../components/Header";

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>Test</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <Header className="flex items-center justify-center bg-white-A700 p-[26px] sm:p-5" />
        <div>
          <div className="flex h-[619px] items-center bg-teal-900_99 bg-[url(/public/images/img_hero_section.png)] bg-cover bg-no-repeat p-[30px] md:h-auto sm:p-5">
            <div className="mx-auto my-[90px] flex w-full max-w-[1860px]">
              <div className="flex w-full flex-col gap-[62px] sm:gap-[31px]">
                <div className="flex flex-col items-center justify-center gap-[31px]">
                  <Heading size="2xl" as="h1" className="mt-1 text-center !font-publicsans !text-white-A700">
                    Find Your Dream Home
                  </Heading>
                  <Text size="2xl" as="p" className="text-center !text-blue_gray-50">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin
                    sodales ultrices nulla blandit volutpat.
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-[17px] px-[230px] md:px-5">
                  <div className="flex gap-2.5">
                    <Button color="indigo_500" size="xl" className="min-w-[84px] rounded font-medium sm:px-5">
                      Rent
                    </Button>
                    <Button color="white_A700" size="xl" className="min-w-[81px] rounded font-medium sm:px-5">
                      Sale
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-5 self-stretch rounded-lg bg-white-A700 p-8 md:flex-col sm:p-5">
                    <div className="ml-[30px] flex w-[74%] gap-[235px] md:ml-0 md:w-full md:flex-row sm:flex-col">
                      <div className="flex flex-col items-start gap-[18px]">
                        <Heading size="md" as="h2" className="text-center capitalize !text-blue_gray-800">
                          Locations
                        </Heading>
                        <div className="flex items-center gap-1">
                          <Text as="p" className="self-end !text-blue_gray-400">
                            Select your city
                          </Text>
                          <Img src="images/img_vector_black_900.svg" alt="select_your" className="h-[6px]" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-4">
                        <Heading size="md" as="h3" className="capitalize !text-blue_gray-800">
                          Property Type
                        </Heading>
                        <div className="flex items-center gap-[5px] self-center">
                          <Text as="p" className="self-end !text-blue_gray-400">
                            Select property type
                          </Text>
                          <Img src="images/img_vector_black_900.svg" alt="vector_one" className="h-[6px]" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-4">
                        <Heading size="md" as="h4" className="capitalize !text-blue_gray-800">
                          Rent Range
                        </Heading>
                        <div className="flex items-center gap-[5px] self-center">
                          <Text as="p" className="self-end !text-blue_gray-400">
                            Select rent range
                          </Text>
                          <Img src="images/img_vector_black_900.svg" alt="vector_one" className="h-[6px]" />
                        </div>
                      </div>
                    </div>
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                      <Button
                        color="indigo_500"
                        size="xl"
                        className="mr-[30px] min-w-[102px] rounded font-medium md:mr-0 md:p-5 sm:px-5"
                      >
                        Search
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[45px] p-[50px] md:p-5">
            <div className="mx-auto mt-1.5 flex w-full max-w-[1215px] flex-col items-center gap-[22px]">
              <Heading size="xl" as="h2" className="text-center !text-blue_gray-900">
                Properties by Area
              </Heading>
              <Text size="2xl" as="p" className="text-center !text-blue_gray-400">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales
                ultrices nulla blandit volutpat.
              </Text>
            </div>
            <div className="mx-auto mb-[3px] flex w-full max-w-[1820px] self-stretch px-[260px] md:px-5">
              <div className="flex w-full flex-col gap-6 pb-[30px] sm:pb-5">
                <div className="flex gap-[26px] md:flex-col">
                  <div className="flex h-[241px] w-full flex-col items-start gap-[15px] rounded-lg bg-[url(/public/images/img_card_1.png)] bg-gradient1 bg-cover bg-no-repeat p-4 md:h-auto">
                    <Heading as="h3" className="tracking-[0.05px] !text-white-A700">
                      Centerville
                    </Heading>
                    <Text as="p" className="mb-[142px] text-center !text-white-A700">
                      25 listings
                    </Text>
                  </div>
                  <div className="flex h-[241px] w-full flex-col items-start gap-[15px] rounded-lg bg-[url(/public/images/img_card_2.png)] bg-gradient1 bg-cover bg-no-repeat p-4 md:h-auto">
                    <Heading as="h4" className="tracking-[0.05px] !text-white-A700">
                      Centerville
                    </Heading>
                    <Text as="p" className="mb-[142px] text-center !text-white-A700">
                      25 listings
                    </Text>
                  </div>
                  <div className="flex h-[241px] w-full flex-col items-start gap-[15px] rounded-lg bg-[url(/public/images/img_card_3.png)] bg-gradient1 bg-cover bg-no-repeat p-4 md:h-auto">
                    <Heading as="h5" className="tracking-[0.05px] !text-white-A700">
                      Centerville
                    </Heading>
                    <Text as="p" className="mb-[142px] text-center !text-white-A700">
                      25 listings
                    </Text>
                  </div>
                </div>
                <div className="flex gap-6 md:flex-col">
                  <div className="flex h-[241px] w-full flex-col items-start gap-[13px] rounded-lg bg-[url(/public/images/img_card_4.png)] bg-gradient2 bg-cover bg-no-repeat p-4 md:h-auto">
                    <Heading as="h6" className="mt-[3px] tracking-[0.05px] !text-white-A700">
                      Arlington
                    </Heading>
                    <Text as="p" className="mb-[142px] text-center !text-white-A700">
                      25 listings
                    </Text>
                  </div>
                  <div className="flex h-[241px] w-full flex-col items-start gap-[15px] rounded-lg bg-[url(/public/images/img_card_5.png)] bg-gradient1 bg-cover bg-no-repeat p-4 md:h-auto">
                    <Heading as="h4" className="tracking-[0.05px] !text-white-A700">
                      Centerville
                    </Heading>
                    <Text as="p" className="mb-[142px] text-center !text-white-A700">
                      25 listings
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-50 py-[70px] md:py-5">
            <div className="flex flex-col items-center gap-[54px] px-14 pt-[78px] md:px-5 md:pt-5 sm:gap-[27px]">
              <div className="mx-auto flex w-full max-w-[1215px] flex-col items-center gap-[22px]">
                <Heading size="xl" as="h2" className="text-center !text-blue_gray-900">
                  Properties by Area
                </Heading>
                <Text size="2xl" as="p" className="text-center !text-blue_gray-400">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales
                  ultrices nulla blandit volutpat.
                </Text>
              </div>
              <div className="mx-auto flex w-full max-w-[1506px] gap-[86px] md:flex-col">
                <div className="flex w-full flex-col gap-6 rounded bg-white-A700 p-[22px] shadow-sm sm:p-5">
                  <Img src="images/img_icon.svg" alt="sell_your_home" className="h-[78px] w-[78px]" />
                  <div className="flex flex-col items-start justify-center gap-6">
                    <Heading as="h3" className="text-center tracking-[0.05px] !text-gray-800_01">
                      Sell your home
                    </Heading>
                    <Text as="p" className="leading-6 !text-blue_gray-400">
                      We do a free evaluation to be sure you want to start selling.
                    </Text>
                    <a href="#">
                      <Text as="p" className="!text-indigo-500">
                        Read more
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex w-full flex-col justify-center gap-6 rounded bg-white-A700 p-4 shadow-sm">
                  <Img src="images/img_home_indigo_500.svg" alt="home_one" className="mt-1.5 h-[78px] w-[78px]" />
                  <div className="mb-1.5 flex flex-col items-start justify-center gap-6">
                    <Heading as="h4" className="mt-0.5 text-center tracking-[0.05px] !text-gray-800_01">
                      Rent your home
                    </Heading>
                    <Text as="p" className="leading-6 !text-blue_gray-400">
                      We do a free evaluation to be sure you want to start selling.
                    </Text>
                    <a href="#">
                      <Text as="p" className="!text-indigo-500">
                        Read more
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-6 rounded bg-white-A700 p-[22px] shadow-sm sm:p-5">
                  <Img src="images/img_icon_indigo_500.svg" alt="icon_one" className="h-[78px] w-[78px]" />
                  <div className="flex flex-col items-start justify-center gap-6">
                    <Heading as="h5" className="mt-0.5 text-center tracking-[0.05px] !text-gray-800_01">
                      Buy a home
                    </Heading>
                    <Text as="p" className="leading-6 !text-blue_gray-400">
                      We do a free evaluation to be sure you want to start selling.
                    </Text>
                    <a href="#">
                      <Text as="p" className="!text-indigo-500">
                        Read more
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex w-full flex-col justify-center gap-6 rounded bg-white-A700 p-5 shadow-sm">
                  <Img src="images/img_icon_indigo_500_78x78.svg" alt="icon_one" className="h-[78px] w-[78px]" />
                  <div className="flex flex-col items-start justify-center gap-6">
                    <Heading as="h6" className="text-center tracking-[0.05px] !text-gray-800_01">
                      Free marketing
                    </Heading>
                    <Text as="p" className="leading-6 !text-blue_gray-400">
                      We do a free evaluation to be sure you want to start selling.
                    </Text>
                    <a href="#">
                      <Text as="p" className="!text-indigo-500">
                        Read more
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[39px] py-[86px] md:py-5">
            <div className="flex flex-col items-center gap-10 self-stretch px-28 md:px-5">
              <div className="flex w-[41%] flex-col items-center gap-[19px] md:w-full">
                <Heading size="xl" as="h2" className="text-center !text-blue_gray-900">
                  Latest Properties of Rent
                </Heading>
                <Text size="2xl" as="p" className="text-center leading-7 !text-blue_gray-400">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales
                  ultrices nulla blandit volutpat.
                </Text>
              </div>
              <div className="mx-auto flex w-full max-w-[1696px] gap-8 self-stretch md:flex-col">
                <div className="flex w-full flex-col items-center gap-[23px] rounded-[10px] border border-solid border-gray-200 bg-white-A700 p-[13px]">
                  <Img
                    src="images/img_property_image.png"
                    alt="image"
                    className="h-[200px] w-full rounded-[10px] object-cover md:h-auto"
                  />
                  <div className="flex self-start p-2.5">
                    <Text size="md" as="p" className="!text-[14.51px] !text-gray-800_01">
                      92 ALLIUM PLACE, ORLANDO FL 32827
                    </Text>
                  </div>
                  <div className="flex self-start p-2.5">
                    <Heading size="xs" as="h3" className="!text-[13.55px]">
                      $ 590,693
                    </Heading>
                  </div>
                  <div className="flex gap-[17px] self-start px-2.5">
                    <div className="flex items-center gap-1 pr-px">
                      <Img src="images/img_car.svg" alt="image_one" className="h-[17px] w-[17px]" />
                      <Text size="xs" as="p" className="self-start !text-[10.84px]">
                        4
                      </Text>
                    </div>
                    <div className="flex items-center gap-1 pr-px">
                      <Img src="images/img_television.svg" alt="image_two" className="h-[17px] w-[17px]" />
                      <Text size="xs" as="p" className="self-start !text-[10.84px]">
                        4
                      </Text>
                    </div>
                    <div className="flex items-center gap-1">
                      <Img src="images/img_map.svg" alt="209600_ft_one" className="h-[17px] w-[17px]" />
                      <Text size="xs" as="p" className="!text-[10.84px]">
                        2,096.00 ft
                      </Text>
                    </div>
                  </div>
                  <div className="mb-[22px] flex items-center justify-between gap-5 self-stretch">
                    <div className="flex w-[29%] items-center justify-center gap-[5px]">
                      <Img
                        src="images/img_ellipse_1.png"
                        alt="jenny_wilson"
                        className="h-[27px] w-[27px] rounded-[50%]"
                      />
                      <Text size="s" as="p" className="mb-[5px] self-end text-center !text-[11.61px] !text-gray-800_01">
                        Jenny Wilson
                      </Text>
                    </div>
                    <div className="flex gap-2">
                      <Button shape="round" className="w-[20px]">
                        <Img src="images/img_send.svg" />
                      </Button>
                      <Button shape="round" className="w-[20px]">
                        <Img src="images/img_favorite.svg" />
                      </Button>
                      <Button shape="round" className="w-[20px]">
                        <Img src="images/img_plus.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-[23px] rounded-[10px] border border-solid border-gray-200 bg-white-A700 p-[13px]">
                  <Img
                    src="images/img_property_image_200x374.png"
                    alt="propertyimage"
                    className="h-[200px] w-full rounded-[10px] object-cover md:h-auto"
                  />
                  <div className="flex self-start p-2.5">
                    <Text size="md" as="p" className="!text-[14.51px] !text-gray-800_01">
                      92 ALLIUM PLACE, ORLANDO FL 32827
                    </Text>
                  </div>
                  <div className="flex self-start p-2.5">
                    <Heading size="xs" as="h4" className="!text-[13.55px]">
                      $ 590,693
                    </Heading>
                  </div>
                  <div className="flex gap-[17px] self-start px-2.5">
                    <div className="flex items-center gap-1 pr-px">
                      <Img src="images/img_car.svg" alt="car_one" className="h-[17px] w-[17px]" />
                      <Text size="xs" as="p" className="self-start !text-[10.84px]">
                        4
                      </Text>
                    </div>
                    <div className="flex items-center gap-1 pr-px">
                      <Img src="images/img_television.svg" alt="television_one" className="h-[17px] w-[17px]" />
                      <Text size="xs" as="p" className="self-start !text-[10.84px]">
                        4
                      </Text>
                    </div>
                    <div className="flex items-center gap-1">
                      <Img src="images/img_map.svg" alt="map_one" className="h-[17px] w-[17px]" />
                      <Text size="xs" as="p" className="!text-[10.84px]">
                        2,096.00 ft
                      </Text>
                    </div>
                  </div>
                  <div className="mb-[22px] flex items-center justify-between gap-5 self-stretch">
                    <div className="flex w-[29%] items-center justify-center gap-[5px]">
                      <Img
                        src="images/img_ellipse_1.png"
                        alt="circleimage"
                        className="h-[27px] w-[27px] rounded-[50%]"
                      />
                      <Text size="s" as="p" className="mb-[5px] self-end text-center !text-[11.61px] !text-gray-800_01">
                        Jenny Wilson
                      </Text>
                    </div>
                    <div className="flex gap-2">
                      <Button shape="round" className="w-[20px]">
                        <Img src="images/img_send.svg" />
                      </Button>
                      <Button shape="round" className="w-[20px]">
                        <Img src="images/img_favorite.svg" />
                      </Button>
                      <Button shape="round" className="w-[20px]">
                        <Img src="images/img_plus.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-[23px] rounded-[10px] border border-solid border-gray-200 bg-white-A700 p-[13px]">
                  <Img
                    src="images/img_property_image_1.png"
                    alt="propertyimage"
                    className="h-[200px] w-full rounded-[10px] object-cover md:h-auto"
                  />
                  <div className="flex self-start p-2.5">
                    <Text size="md" as="p" className="!text-[14.51px] !text-gray-800_01">
                      92 ALLIUM PLACE, ORLANDO FL 32827
                    </Text>
                  </div>
                  <div className="flex self-start p-2.5">
                    <Heading size="xs" as="h5" className="!text-[13.55px]">
                      $ 590,693
                    </Heading>
                  </div>
                  <div className="flex gap-[17px] self-start px-2.5">
                    <div className="flex items-center gap-1 pr-px">
                      <Img src="images/img_car.svg" alt="car_one" className="h-[17px] w-[17px]" />
                      <Text size="xs" as="p" className="self-start !text-[10.84px]">
                        4
                      </Text>
                    </div>
                    <div className="flex items-center gap-1 pr-px">
                      <Img src="images/img_television.svg" alt="television_one" className="h-[17px] w-[17px]" />
                      <Text size="xs" as="p" className="self-start !text-[10.84px]">
                        4
                      </Text>
                    </div>
                    <div className="flex items-center gap-1">
                      <Img src="images/img_map.svg" alt="map_one" className="h-[17px] w-[17px]" />
                      <Text size="xs" as="p" className="!text-[10.84px]">
                        2,096.00 ft
                      </Text>
                    </div>
                  </div>
                  <div className="mb-[22px] flex items-center justify-between gap-5 self-stretch">
                    <div className="flex w-[29%] items-center justify-center gap-[5px]">
                      <Img
                        src="images/img_ellipse_1.png"
                        alt="circleimage"
                        className="h-[27px] w-[27px] rounded-[50%]"
                      />
                      <Text size="s" as="p" className="mb-[5px] self-end text-center !text-[11.61px] !text-gray-800_01">
                        Jenny Wilson
                      </Text>
                    </div>
                    <div className="flex gap-2">
                      <Button shape="round" className="w-[20px]">
                        <Img src="images/img_send.svg" />
                      </Button>
                      <Button shape="round" className="w-[20px]">
                        <Img src="images/img_favorite.svg" />
                      </Button>
                      <Button shape="round" className="w-[20px]">
                        <Img src="images/img_plus.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-[23px] rounded-[10px] border border-solid border-gray-200 bg-white-A700 p-[13px]">
                  <Img
                    src="images/img_property_image_2.png"
                    alt="propertyimage"
                    className="h-[200px] w-full rounded-[10px] object-cover md:h-auto"
                  />
                  <div className="flex self-start p-2.5">
                    <Text size="md" as="p" className="!text-[14.51px] !text-gray-800_01">
                      92 ALLIUM PLACE, ORLANDO FL 32827
                    </Text>
                  </div>
                  <div className="flex self-start p-2.5">
                    <Heading size="xs" as="h6" className="!text-[13.55px]">
                      $ 590,693
                    </Heading>
                  </div>
                  <div className="flex gap-[17px] self-start px-2.5">
                    <div className="flex items-center gap-1 pr-px">
                      <Img src="images/img_car.svg" alt="car_one" className="h-[17px] w-[17px]" />
                      <Text size="xs" as="p" className="self-start !text-[10.84px]">
                        4
                      </Text>
                    </div>
                    <div className="flex items-center gap-1 pr-px">
                      <Img src="images/img_television.svg" alt="television_one" className="h-[17px] w-[17px]" />
                      <Text size="xs" as="p" className="self-start !text-[10.84px]">
                        4
                      </Text>
                    </div>
                    <div className="flex items-center gap-1">
                      <Img src="images/img_map.svg" alt="map_one" className="h-[17px] w-[17px]" />
                      <Text size="xs" as="p" className="!text-[10.84px]">
                        2,096.00 ft
                      </Text>
                    </div>
                  </div>
                  <div className="mb-[22px] flex items-center justify-between gap-5 self-stretch">
                    <div className="flex w-[29%] items-center justify-center gap-[5px]">
                      <Img
                        src="images/img_ellipse_1.png"
                        alt="circleimage"
                        className="h-[27px] w-[27px] rounded-[50%]"
                      />
                      <Text size="s" as="p" className="mb-[5px] self-end text-center !text-[11.61px] !text-gray-800_01">
                        Jenny Wilson
                      </Text>
                    </div>
                    <div className="flex gap-2">
                      <Button shape="round" className="w-[20px]">
                        <Img src="images/img_send.svg" />
                      </Button>
                      <Button shape="round" className="w-[20px]">
                        <Img src="images/img_favorite.svg" />
                      </Button>
                      <Button shape="round" className="w-[20px]">
                        <Img src="images/img_plus.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button color="indigo_500" size="xl" className="min-w-[180px] rounded font-medium sm:px-5">
              Load more listing
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-[39px] py-[86px] md:py-5">
            <div className="flex flex-col items-center gap-10 self-stretch px-40 md:px-5">
              <div className="flex w-[43%] flex-col items-center gap-[19px] md:w-full">
                <Heading size="xl" as="h2" className="text-center !text-blue_gray-900">
                  Latest Properties of Rent
                </Heading>
                <Text size="2xl" as="p" className="text-center leading-7 !text-blue_gray-400">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales
                  ultrices nulla blandit volutpat.
                </Text>
              </div>
              <div className="mx-auto flex w-full max-w-[1600px] gap-10 self-stretch md:flex-col">
                <div className="flex h-[426px] w-full items-end justify-between gap-5 rounded-md bg-[url(/public/images/img_card_1_426x370.png)] bg-gradient bg-cover bg-no-repeat p-6 md:h-auto sm:p-5">
                  <div className="ml-[43px] mt-[354px] flex items-center gap-2 md:ml-0">
                    <Img src="images/img_linkedin.svg" alt="washington_one" className="h-[24px] w-[24px]" />
                    <Text as="p" className="self-end !font-medium !text-white-A700">
                      Washington
                    </Text>
                  </div>
                  <div className="mr-[43px] flex items-center gap-2 md:mr-0">
                    <Img src="images/img_map_white_a700.svg" alt="image" className="h-[24px] w-[24px]" />
                    <Text as="p" className="!font-medium !text-white-A700">
                      12000
                    </Text>
                  </div>
                </div>
                <div className="flex h-[426px] w-full items-end justify-between gap-5 rounded-md bg-[url(/public/images/img_card_2_426x370.png)] bg-gradient bg-cover bg-no-repeat p-6 md:h-auto sm:p-5">
                  <div className="ml-[43px] mt-[354px] flex items-center gap-2 md:ml-0">
                    <Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-[24px] w-[24px]" />
                    <Text as="p" className="self-end !font-medium !text-white-A700">
                      Washington
                    </Text>
                  </div>
                  <div className="mr-[43px] flex items-center gap-2 md:mr-0">
                    <Img src="images/img_map_white_a700.svg" alt="map_one" className="h-[24px] w-[24px]" />
                    <Text as="p" className="!font-medium !text-white-A700">
                      12000
                    </Text>
                  </div>
                </div>
                <div className="flex h-[426px] w-full items-end justify-between gap-5 rounded-md bg-[url(/public/images/img_card_3_426x370.png)] bg-gradient bg-cover bg-no-repeat p-6 md:h-auto sm:p-5">
                  <div className="ml-[43px] mt-[354px] flex items-center gap-2 md:ml-0">
                    <Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-[24px] w-[24px]" />
                    <Text as="p" className="self-end !font-medium !text-white-A700">
                      Washington
                    </Text>
                  </div>
                  <div className="mr-[43px] flex items-center gap-2 md:mr-0">
                    <Img src="images/img_map_white_a700.svg" alt="map_one" className="h-[24px] w-[24px]" />
                    <Text as="p" className="!font-medium !text-white-A700">
                      12000
                    </Text>
                  </div>
                </div>
                <div className="flex h-[426px] w-full items-end justify-between gap-5 rounded-md bg-[url(/public/images/img_card_4_426x370.png)] bg-gradient bg-cover bg-no-repeat p-6 md:h-auto sm:p-5">
                  <div className="ml-[43px] mt-[354px] flex items-center gap-2 md:ml-0">
                    <Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-[24px] w-[24px]" />
                    <Text as="p" className="self-end !font-medium !text-white-A700">
                      Washington
                    </Text>
                  </div>
                  <div className="mr-[43px] flex items-center gap-2 md:mr-0">
                    <Img src="images/img_map_white_a700.svg" alt="map_one" className="h-[24px] w-[24px]" />
                    <Text as="p" className="!font-medium !text-white-A700">
                      12000
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button color="indigo_500" size="xl" className="min-w-[180px] rounded font-medium sm:px-5">
              Load more listing
            </Button>
          </div>
          <div className="flex justify-center bg-blue_gray-50 px-14 py-[85px] md:p-5">
            <div className="flex w-[50%] flex-col items-center gap-10 px-2.5 md:w-full">
              <div className="flex w-[78%] flex-col items-center gap-[23px] md:w-full">
                <a href="#">
                  <Heading size="xl" as="h2" className="text-center !text-blue_gray-900">
                    Contact us
                  </Heading>
                </a>
                <Text size="2xl" as="p" className="text-center leading-7 !text-blue_gray-400">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales
                  ultrices nulla blandit volutpat.
                </Text>
              </div>
              <div className="flex flex-col items-center gap-[17px] self-stretch rounded-[12px] bg-white-A700 p-7 shadow-xs sm:p-5">
                <div className="flex flex-col items-start justify-center gap-[9px]">
                  <Heading as="h3" className="!font-poppins !font-bold !text-gray-800">
                    Enquiry Form
                  </Heading>
                  <Text size="xl" as="p" className="!font-roboto !text-blue_gray-600">
                    Are you looking for details about a certain property? Ask us a question using the form below.
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-2.5 self-stretch">
                  <div className="flex flex-wrap gap-2.5 self-start">
                    <Text
                      as="p"
                      className="rounded border border-solid border-black-900_7f py-[18px] pl-3 pr-[35px] !font-roboto tracking-[0.15px] !text-gray-500 sm:pr-5"
                    >
                      First name
                    </Text>
                    <Text
                      as="p"
                      className="rounded border border-solid border-black-900_7f py-[18px] pl-3 pr-[35px] !font-roboto tracking-[0.15px] !text-gray-500 sm:pr-5"
                    >
                      Last name
                    </Text>
                  </div>
                  <Input shape="round" type="email" name="firstName" placeholder={`Email id`} className="sm:pr-5" />
                  <TextArea
                    shape="round"
                    name="input_three"
                    placeholder={`Comments or questions`}
                    className="self-stretch font-roboto tracking-[0.15px] text-gray-500 sm:pb-5 sm:pr-5"
                  />
                  <Button color="indigo_500" size="xl" className="min-w-[222px] rounded font-roboto sm:px-5">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center p-[49px] md:p-5">
          <div className="mx-auto flex w-full max-w-[1820px] items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[17%] flex-col gap-5 md:w-full">
              <div className="flex items-center gap-2">
                <Img
                  src="images/img_home_indigo_500_44x44.png"
                  alt="home_four"
                  className="h-[44px] w-[44px] object-cover"
                />
                <div className="flex flex-col items-start self-start">
                  <Heading as="h4" className="text-center tracking-[0.05px]">
                    REIS
                  </Heading>
                  <Text size="md" as="p" className="text-center !text-indigo-500">
                    Real State
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <a href="#">
                  <Heading as="h4" className="!font-publicsans tracking-[0.05px] !text-gray-900">
                    Contact Us
                  </Heading>
                </a>
                <Text as="p">Call : +123 400 123</Text>
                <Text as="p" className="leading-6">
                  Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
                </Text>
                <Text as="p" className="!text-gray-800_01">
                  Email: example@mail.com
                </Text>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="w-[48px] rounded">
                  <Img src="images/img_facebook.svg" />
                </Button>
                <Button size="lg" className="w-[48px] rounded">
                  <Img src="images/img_vector.svg" />
                </Button>
                <Button size="lg" className="w-[48px] rounded">
                  <Img src="images/img_link.svg" />
                </Button>
                <Button size="lg" className="w-[48px] rounded">
                  <Img src="images/img_info.svg" />
                </Button>
                <Button size="lg" className="w-[48px] rounded">
                  <Img src="images/img_social_media_logo.svg" />
                </Button>
              </div>
            </div>
            <div className="flex w-[10%] flex-col items-start gap-[33px] md:w-full">
              <Heading as="h4" className="!font-publicsans tracking-[0.05px] !text-gray-900">
                Features
              </Heading>
              <div className="flex flex-col items-start gap-5">
                <a href="Home" target="_blank" rel="noreferrer">
                  <Text as="p">Home</Text>
                </a>
                <a href="#">
                  <Text as="p">Become a Host</Text>
                </a>
                <a href="Pricing" target="_blank" rel="noreferrer">
                  <Text as="p">Pricing</Text>
                </a>
                <a href="Blog" target="_blank" rel="noreferrer">
                  <Text as="p">Blog</Text>
                </a>
                <a href="Contact" target="_blank" rel="noreferrer">
                  <Text as="p">Contact</Text>
                </a>
              </div>
            </div>
            <div className="flex w-[10%] flex-col items-start gap-[31px] md:w-full">
              <Heading as="h4" className="!font-publicsans tracking-[0.05px] !text-gray-900">
                Company
              </Heading>
              <div className="flex flex-col items-start justify-center gap-[21px]">
                <a href="#">
                  <Text as="p">About Us</Text>
                </a>
                <a href="Press" target="_blank" rel="noreferrer">
                  <Text as="p">Press</Text>
                </a>
                <a href="Contact" target="_blank" rel="noreferrer">
                  <Text as="p">Contact</Text>
                </a>
                <a href="Careers" target="_blank" rel="noreferrer">
                  <Text as="p">Careers</Text>
                </a>
                <a href="Blog" target="_blank" rel="noreferrer">
                  <Text as="p">Blog</Text>
                </a>
              </div>
            </div>
            <div className="flex w-[11%] flex-col gap-[31px] md:w-full">
              <Heading as="h4" className="!font-publicsans tracking-[0.05px] !text-gray-900">
                Team and policies
              </Heading>
              <div className="flex flex-col items-start justify-center gap-[21px]">
                <a href="#">
                  <Text as="p">Terms of servies</Text>
                </a>
                <a href="#">
                  <Text as="p">Privacy Policy</Text>
                </a>
                <a href="Security" target="_blank" rel="noreferrer">
                  <Text as="p">Security</Text>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
