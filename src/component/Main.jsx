import React from "react";
import { TbDeviceGamepad2,TbBrandMessenger,TbSend} from "react-icons/tb";
import {SlLike} from "react-icons/sl";
import {RiNewspaperLine} from "react-icons/ri";

const Main = () => {
  return (
    <div className="bg-yellow-50">
      <div className="flex justify-between">
        {/* First column */}
        <div className="flex flex-col m-4 w-80">
          <div class="bg-white p-4 shadow ">
            <p className="mx-4 font-semibold p-2">Complete you profile</p>
            <div className="mx-5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-3/4">
              <div className="bg-yellow-600 h-2.5 rounded-full w-1/4"></div>
            </div>
            <p className="mx-4 font-semibold p-2">
              Recruiter search 100% Completed profile (2/5 was Completed)
            </p>
            <p className="mx-4 p-2">
              You can see more relevent jobs update, feed updates, and profile
              views by building profile.
            </p>
            <div className="mx-4 p-2"></div>
            <div className="flex justify-center items-center">
              <button className="bg-blue-500 text-white rounded-md px-3 py-1 m-5">
                Complete your profile
              </button>
            </div>
          </div>
          <div className="bg-white p-5 shadow my-4 ">
            <p className="font-semibold mb-3">Notification</p>
            <div className="flex justify-between mb-3">
              <div className="flex">
                <div className="flex items-start">
                  <img
                    src={
                      "https://d3lzcn6mbbadaf.cloudfront.net/media/details/HCL_daa9m3J.jpg"
                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-sm">HCL</p>
                  <p className="text-xs">
                    You may fit for the latest opening in HCL
                  </p>
                  <p className="text-gray-300 text-xs">18 minutes ag0</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <div className="flex">
                <div className="flex items-start">
                  <img
                    src={
                      "https://media.licdn.com/dms/image/C560BAQHi3Lp56qja9w/company-logo_200_200/0/1620248216857?e=2147483647&v=beta&t=FLgCC7KXfiViuLbu3-rAEfWD426Dg5WWha_KzuQWVas"
                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-sm">BasketHunt</p>
                  <p className="text-xs">
                    Check it out the latest opening at baskethunt
                  </p>
                  <p className="text-gray-300 text-xs">23 minutes ag0</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <div className="flex">
                <div className="flex items-start">
                  <img
                    src={
                      "https://cdn.siasat.com/wp-content/uploads/2021/01/LG-Logo-780x470.jpg"
                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-sm">LG</p>
                  <p className="text-xs">
                    LG hiring for recently graduates
                  </p>
                  <p className="text-gray-300 text-xs">45 minutes ag0</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <div className="flex">
                <div className="flex items-start">
                  <img
                    src={
                      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-sm">Job Hunt</p>
                  <p className="text-xs">
                    Subscribe to our new letter for more jobs updates.
                  </p>
                  <p className="text-gray-300 text-xs">18 minutes ag0</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <div className="flex">
                <div className="flex items-start">
                  <img
                    src={
                      "https://d3lzcn6mbbadaf.cloudfront.net/media/details/HCL_daa9m3J.jpg"
                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-sm">HCL</p>
                  <p className="text-xs">
                    You may fit for the latest opening in HCL.
                  </p>
                  <p className="text-gray-300 text-xs">23 minutes ag0</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <div className="flex">
                <div className="flex items-start">
                  <img
                    src={
                      "https://en.wikipedia.org/wiki/File:HP_logo_2012.svg"
                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-sm">HP</p>
                  <p className="text-xs">
                    Suggested for you because you match with job profile
                  </p>
                  <p className="text-gray-300 text-xs">45 minutes ag0</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="flex flex-col my-4">
          <div class="bg-white p-4 shadow">
            <div className="flex">
              <img
                src={
                  "https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt=""
                className="w-8 h-8 rounded-md object-cover"
              />
              <input
                type="text"
                placeholder="What would you like to share?"
                className="bg-gray-200 rounded-md ml-5 pl-4 w-96"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex mt-4">
                <RiNewspaperLine size={25} />
                <p className="ml-2">Post a Update</p>
              </div>
              <div className="flex mt-4">
                <TbDeviceGamepad2 size={25} />
                <p className="ml-2">Create a Post</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 shadow mt-4">
            <div className="flex justify-between mb-5">
              <div className="flex">
                <div className="flex items-center">
                  <img
                    src={
                      "https://images.pexels.com/photos/1537875/pexels-photo-1537875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Daily dose</p>
                  <p>2 min ago</p>
                </div>
              </div>
              <button className="px-3 bg-gray-300 h-8 rounded-md">Read More</button>
            </div>
            <p>
              <span className="font-semibold">TCS</span> fired
              3000 employees who are not progressing...see more
            </p>
          </div>
          <img
            src={
              "https://img.etimg.com/thumb/msid-86652906,width-650,height-488,imgsize-715266,,resizemode-75/tcs.jpg"
            }
            alt=""
            className="h-96"
          />
          <div className="bg-white p-4 shadow">
            <div className="flex justify-between mb-3">
              <p>99.k Likes</p>
              <p>99.k Comments  568 views</p>
            </div>
            <hr />
            <div className="flex justify-around mt-3">
              <div className="flex">
                <SlLike className="mr-2"/>
                <p>Like</p>
              </div>
              <div className="flex">
                <TbBrandMessenger  className="mr-2" size={20}/>
                <p>Comments</p>
              </div>
              <div className="flex">
                < TbSend className="mr-2" size={20}/>
                <p>Send</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 shadow mt-4">
            <div className="flex justify-between mb-5">
              <div className="flex">
                <div className="flex items-center">
                  <img
                    src={
                      "https://img.freepik.com/free-vector/education-business-logo-template-branding-design-vector-education-center-text_53876-136247.jpg?w=740&t=st=1687110778~exp=1687111378~hmac=ad75c3057502bc24f5378c57da5f86b52e58e76990d771af77a9db6834876f98"
                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Miles Eduction</p>
                  <p>12 minutes ago</p>
                </div>
              </div>
              <button className="px-3 bg-gray-300 h-8 rounded-md">Read More</button>
            </div>{" "}
            <p>
Twitter to Focus on Video, Creator and Commerce Partnerships, Says CEO Yaccarino
by Reuters ...see more 
            </p>
          </div>
          <img
            src={
              "https://image.cnbcfm.com/api/v1/image/107146151-1667560529620-gettyimages-1244400855-porzycki-elonmusk221101_npwjk.jpeg?v=1667677526&w=630&h=354&ffmt=webp&vtcrop=y"
            }
            alt=""
            className="h-96"
          />
          <div className="bg-white p-4 shadow">
            <div className="flex justify-between mb-3">
              <p>99.k Likes</p>
              <p>99.k Comments  568 views</p>
            </div>
            <hr />
            <div className="flex justify-around mt-3">
              <div className="flex">
                <SlLike className="mr-2"/>
                <p>Like</p>
              </div>
              <div className="flex">
                <TbBrandMessenger  className="mr-2" size={20}/>
                <p>Comments</p>
              </div>
              <div className="flex">
                < TbSend className="mr-2" size={20}/>
                <p>Send</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 shadow mt-4">
            <div className="flex justify-between mb-5">
              <div className="flex">
                <div className="flex items-center">
                  <img
                    src="https://i.pinimg.com/originals/e6/2b/02/e62b0282035db564700dd47789a341e8.png"
                    alt=""
                    className="w-8 h-8 rounded-md"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Tech News</p>
                  <p>1 day ago</p>
                </div>
              </div>
              <button className="px-3 bg-gray-300 h-8 rounded-md">Read More</button>
            </div>{" "}
            <p>
            Adani Enterprises arm Adani Digital Labs agrees to buy online train booking start-up  ...see more
            </p>
          </div>
          <img
            src={
              "https://img.etimg.com/thumb/msid-93932340,width-210,height-158,imgsize-65114,,resizemode-75/adani-1.jpg"
            }
            alt=""
            className=" h-96 "
          />
          <div className="bg-white p-4 shadow">
            <div className="flex justify-between mb-3">
              <p>99.k Likes</p>
              <p>99.k Comments  568 views</p>
            </div>
            <hr />
            <div className="flex justify-around mt-3">
              <div className="flex">
                <SlLike className="mr-2"/>
                <p>Like</p>
              </div>
              <div className="flex">
                <TbBrandMessenger  className="mr-2" size={20}/>
                <p>Comments</p>
              </div>
              <div className="flex">
                < TbSend className="mr-2" size={20}/>
                <p>Send</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 shadow mt-4">
            <div className="flex justify-between mb-5">
              <div className="flex">
                <div className="flex items-center">
                  <img
                    src="#"
                    alt=""
                    className="w-8 h-8 rounded-md outline-dotted"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Miles Eduction</p>
                  <p>1 day ago</p>
                </div>
              </div>
              <button className="px-3 bg-gray-300 h-8 rounded-md">Read More</button>
            </div>{" "}
            <p>
              <span className="font-semibold">Turn you dream</span> of working
              in a US, a reality! With a 96$ visa <br /> acceptance rate,{" "}
              <span className="text-blue-500">@first</span> king of its kind I
              Tamil <span className="text-blue-500">@Startup</span> ...see more
            </p>
          </div>
          <img
            src={
              "https://images.pexels.com/photos/14713776/pexels-photo-14713776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            className=" h-96 "
          />
          <div className="bg-white p-4 shadow">
            <div className="flex justify-between mb-3">
              <p>99.k Likes</p>
              <p>99.k Comments  568 views</p>
            </div>
            <hr />
            <div className="flex justify-around mt-3">
              <div className="flex">
                <SlLike className="mr-2"/>
                <p>Like</p>
              </div>
              <div className="flex">
                <TbBrandMessenger  className="mr-2" size={20}/>
                <p>Comments</p>
              </div>
              <div className="flex">
                < TbSend className="mr-2" size={20}/>
                <p>Send</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third column */}
        <div className="flex flex-col m-4 w-96">
          <div class="bg-white p-4 shadow relative">
            <p className=" font-semibold p-2">Important</p>
            <img
              src={
                "https://img.jagranjosh.com/images/2023/January/212023/Universities.jpg"
              }
              alt=""
              className="w-80 h-20 rounded-sm object-cover"
            />
            <img
              src={
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt=""
              className="w-20 h-20 rounded-md absolute top-24 left-32 object-cover"
            />
            <p className="mt-10 text-center font-semibold md-2">IIT Mumbai</p>
            <p className="text-center p-2">
              <span className="font-semibold">IIT_Mumbai</span> would likes to
              add you as a placement partners.
            </p>
            <div className="flex justify-center m-4">
              <button className="bg-blue-500 px-8 py-1 mr-2 rounded-md">
                Subscribe
              </button>
              <button className="bg-gray-300 px-10 py-1 ml-2 rounded-md">
                Denied
              </button>
            </div>
          </div>
          <div className="bg-white p-5 shadow my-4 ">
            <p className="font-semibold mb-5">Requests ...(56)</p>
            <div className="flex flex-around my-3">
              <div className="flex mr-12">
                <div className="flex items-start">
                  <img
                    src={
                      'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-2">
                  <p className="font-semibold text-sm">gergvd</p>
                  <p className="text-xs">gergvd_jfkd </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-blue-500 h-6 text-xs px-5 rounded-md mr-3">
                  Add
                </button>
                <button className="bg-gray-300 h-6 text-xs px-5 rounded-md">
                  Denied
                </button>
              </div>
            </div>
            <div className="flex flex-around my-3">
              <div className="flex mr-12">
                <div className="flex items-start">
                  <img
                    src={
                      'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-2">
                  <p className="font-semibold text-sm">lgjfl</p>
                  <p className="text-xs">gergvd_jfkd </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-gray-300 h-6 text-xs px-5 rounded-md mr-3">
                  Add
                </button>
                <button className="bg-blue-500 h-6 text-xs px-5 rounded-md">
                  Denied
                </button>
              </div>
            </div>
            <div className="flex flex-around my-3">
              <div className="flex mr-12">
                <div className="flex items-start">
                  <img
                    src={
                      'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-2">
                  <p className="font-semibold text-sm">wedc</p>
                  <p className="text-xs">gergvd_jfkd </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-gray-300 h-6 text-xs px-5 rounded-md mr-3">
                  Add
                </button>
                <button className="bg-gray-300 h-6 text-xs px-5 rounded-md">
                  Denied
                </button>
              </div>
            </div>
            <div className="flex flex-around my-3">
              <div className="flex mr-12">
                <div className="flex items-start">
                  <img
                    src={
                      'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-2">
                  <p className="font-semibold text-sm">grgerf</p>
                  <p className="text-xs">gergvd_jfkd </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-gray-300 h-6 text-xs px-5 rounded-md mr-3">
                  Add
                </button>
                <button className="bg-gray-300 h-6 text-xs px-5 rounded-md">
                  Denied
                </button>
              </div>
            </div>
            <div className="flex flex-around my-3">
              <div className="flex mr-12">
                <div className="flex items-start">
                  <img
                    src={
                      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-2">
                  <p className="font-semibold text-sm">pkl,</p>
                  <p className="text-xs">gergvd_jfkd </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-gray-300 h-6 text-xs px-5 rounded-md mr-3">
                  Add
                </button>
                <button className="bg-blue-500 h-6 text-xs px-5 rounded-md">
                  Denied
                </button>
              </div>
            </div>
            <div className="flex flex-around my-3">
              <div className="flex mr-12">
                <div className="flex items-start">
                  <img
                    src={
                      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-2">
                  <p className="font-semibold text-sm">qsdfs</p>
                  <p className="text-xs">gergvd_jfkd </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-gray-300 h-6 text-xs px-5 rounded-md mr-3">
                  Add
                </button>
                <button className="bg-gray-300 h-6 text-xs px-5 rounded-md">
                  Denied
                </button>
              </div>
            </div>
            <div className="flex flex-around my-3">
              <div className="flex mr-12">
                <div className="flex items-start">
                  <img
                    src={
                      'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'                    }
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
                <div className="ml-2">
                  <p className="font-semibold text-sm">xzczc</p>
                  <p className="text-xs">gergvd_jfkd </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-gray-300 h-6 text-xs px-5 rounded-md mr-3">
                  Add
                </button>
                <button className="bg-gray-300 h-6 text-xs px-5 rounded-md">
                  Denied
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
