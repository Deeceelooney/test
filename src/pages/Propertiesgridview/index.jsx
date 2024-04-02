import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import Header from "../../components/Header";

export default function PropertiesgridviewPage() {
  return (
    <>
      <Helmet>
        <title>Test</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700 pb-[50px] md:pb-5">
        <Header className="flex items-center justify-center self-stretch bg-white-A700 p-[26px] sm:p-5" />
        <div className="self-stretch">
          <div className="flex h-[240px] items-center justify-center bg-teal-900_b2 bg-[url(/public/images/img_category.png)] bg-cover bg-no-repeat px-14 py-[66px] md:h-auto md:p-5">
            <div className="flex">
              <div className="flex flex-col items-center gap-4">
                <Heading size="2xl" as="h1" className="mt-2 text-center !font-publicsans !text-white-A700">
                  Properties
                </Heading>
                <Text as="p" className="text-center !text-gray-200_01">
                  <span className="text-gray-200_01">Home /&nbsp;</span>
                  <span className="font-medium text-white-A700">Properties</span>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[95px] py-2 md:gap-[71px] sm:gap-[47px]">
            <div className="mt-14 flex pr-2">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <Img src="images/img_megaphone.svg" alt="megaphone_one" className="h-[24px] w-[24px]" />
                  <Img src="images/img_grid.svg" alt="grid_one" className="h-[24px] w-[24px]" />
                </div>
                <Text as="p" className="self-end !text-gray-900">
                  Sort by:
                </Text>
                <div className="flex items-center gap-1">
                  <Text as="p" className="!text-blue_gray-400">
                    Default Order
                  </Text>
                  <Img src="images/img_vector_black_900.svg" alt="vector_one" className="h-[6px]" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(324px_,_1fr))] justify-center gap-2 self-stretch px-[69px] md:px-5">
              <div className="flex w-full flex-col gap-[23px] rounded-[10px] border border-solid border-gray-200 bg-white-A700 p-[13px]">
                <Img
                  src="images/img_property_image.png"
                  alt="image"
                  className="h-[200px] rounded-[10px] object-cover"
                />
                <div className="mb-[22px] flex flex-col gap-[23px]">
                  <div className="flex p-2.5">
                    <Text size="md" as="p" className="!text-[14.51px] !text-gray-800_01">
                      92 ALLIUM PLACE, ORLANDO FL 32827
                    </Text>
                  </div>
                  <div className="flex self-start p-2.5">
                    <Heading size="xs" as="h2" className="!text-[13.55px]">
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
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex w-[33%] items-center justify-center gap-[5px]">
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
              </div>
              <div className="flex w-full flex-col items-center gap-[23px] rounded-[10px] border border-solid border-gray-200 bg-white-A700 p-[13px]">
                <Img
                  src="images/img_property_image_200x374.png"
                  alt="propertyimage"
                  className="h-[200px] w-full rounded-[10px] object-cover md:h-auto"
                />
                <div className="flex p-2.5">
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
                  <div className="flex w-[33%] items-center justify-center gap-[5px]">
                    <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[27px] w-[27px] rounded-[50%]" />
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
                <div className="flex p-2.5">
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
                  <div className="flex w-[33%] items-center justify-center gap-[5px]">
                    <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[27px] w-[27px] rounded-[50%]" />
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
                <div className="flex p-2.5">
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
                  <div className="flex w-[33%] items-center justify-center gap-[5px]">
                    <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[27px] w-[27px] rounded-[50%]" />
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
              <div className="flex w-full flex-col gap-[23px] rounded-[10px] border border-solid border-gray-200 bg-white-A700 p-[13px]">
                <Img
                  src="images/img_property_image.png"
                  alt="propertyimage"
                  className="h-[200px] rounded-[10px] object-cover"
                />
                <div className="mb-[22px] flex flex-col gap-[23px]">
                  <div className="flex p-2.5">
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
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex w-[33%] items-center justify-center gap-[5px]">
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
              <div className="flex w-full flex-col gap-[23px] rounded-[10px] border border-solid border-gray-200 bg-white-A700 p-[13px]">
                <Img
                  src="images/img_property_image_200x374.png"
                  alt="propertyimage"
                  className="h-[200px] rounded-[10px] object-cover"
                />
                <div className="mb-[22px] flex flex-col gap-[23px]">
                  <div className="flex p-2.5">
                    <Text size="md" as="p" className="!text-[14.51px] !text-gray-800_01">
                      92 ALLIUM PLACE, ORLANDO FL 32827
                    </Text>
                  </div>
                  <div className="flex self-start p-2.5">
                    <Heading size="xs" as="p" className="!text-[13.55px]">
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
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex w-[33%] items-center justify-center gap-[5px]">
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
              <div className="flex w-full flex-col gap-[23px] rounded-[10px] border border-solid border-gray-200 bg-white-A700 p-[13px]">
                <Img
                  src="images/img_property_image_1.png"
                  alt="propertyimage"
                  className="h-[200px] rounded-[10px] object-cover"
                />
                <div className="mb-[22px] flex flex-col gap-[23px]">
                  <div className="flex p-2.5">
                    <Text size="md" as="p" className="!text-[14.51px] !text-gray-800_01">
                      92 ALLIUM PLACE, ORLANDO FL 32827
                    </Text>
                  </div>
                  <div className="flex self-start p-2.5">
                    <Heading size="xs" as="p" className="!text-[13.55px]">
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
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex w-[33%] items-center justify-center gap-[5px]">
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
              <div className="flex w-full flex-col items-center gap-[23px] rounded-[10px] border border-solid border-gray-200 bg-white-A700 p-[13px]">
                <Img
                  src="images/img_property_image_2.png"
                  alt="propertyimage"
                  className="h-[200px] w-full rounded-[10px] object-cover md:h-auto"
                />
                <div className="flex p-2.5">
                  <Text size="md" as="p" className="!text-[14.51px] !text-gray-800_01">
                    92 ALLIUM PLACE, ORLANDO FL 32827
                  </Text>
                </div>
                <div className="flex self-start p-2.5">
                  <Heading size="xs" as="p" className="!text-[13.55px]">
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
                  <div className="flex w-[33%] items-center justify-center gap-[5px]">
                    <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[27px] w-[27px] rounded-[50%]" />
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
            <div className="flex gap-2">
              <Button size="md" className="w-[44px] rounded">
                <Img src="images/img_arrow_down.svg" />
              </Button>
              <Button color="indigo_500" size="sm" className="min-w-[44px] rounded-[3px] font-semibold">
                1
              </Button>
              <Button size="sm" className="min-w-[44px] rounded-[3px] font-semibold">
                2
              </Button>
              <Button size="sm" className="min-w-[44px] rounded-[3px] font-semibold">
                3
              </Button>
              <Button size="sm" className="min-w-[44px] rounded-[3px] font-semibold">
                ...
              </Button>
              <Button size="sm" className="min-w-[44px] rounded-[3px] font-semibold">
                54
              </Button>
              <Button color="indigo_500" size="md" className="w-[44px] rounded">
                <Img src="images/img_arrow_left.svg" />
              </Button>
            </div>
          </div>
        </div>
        <footer className="mt-[49px] w-[95%] md:w-full md:p-5">
          <div className="flex items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[17%] flex-col gap-5 md:w-full">
              <div className="flex items-center gap-2">
                <Img src="images/img_home.svg" alt="home_four" className="h-[44px] w-[44px]" />
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
