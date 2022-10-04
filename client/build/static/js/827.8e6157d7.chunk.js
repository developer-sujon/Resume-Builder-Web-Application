"use strict";
(self.webpackChunkmern_stack_resume_builder =
  self.webpackChunkmern_stack_resume_builder || []).push([
  [827],
  {
    827: function (e, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return q;
          },
        });
      var d = t(885),
        a = t(2791),
        l = t(1413),
        n = t(9434),
        s = t(5705),
        i = t(7103),
        c = t(4925),
        o = t(6770),
        x = t.n(o),
        m = (t(6009), t(184)),
        u = ["field", "form"],
        p = function (e) {
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)("div", {
                className: "flex flex-wrap mx-[-15px] my-5",
                children: [
                  (0, m.jsxs)("div", {
                    className: "px-[15px] w-full md:w-[33.333333%]",
                    children: [
                      (0, m.jsx)("label", {
                        htmlFor: "FullName",
                        className:
                          "block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white",
                        children: "Full Name",
                      }),
                      (0, m.jsx)(s.gN, {
                        id: "FullName",
                        type: "text",
                        name: "FullName",
                        placeholder: "Mohammad Salman",
                        component: h,
                      }),
                      (0, m.jsx)("p", {
                        id: "filled_error_help",
                        className:
                          "mt-2 text-md text-red-600 dark:text-red-400",
                        children: (0, m.jsx)(s.Bc, { name: "FullName" }),
                      }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: "px-[15px] w-full md:w-[33.333333%]",
                    children: [
                      (0, m.jsx)("label", {
                        htmlFor: "UserName",
                        className:
                          "block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white",
                        children: "Username",
                      }),
                      (0, m.jsx)(s.gN, {
                        id: "UserName",
                        type: "text",
                        name: "UserName",
                        placeholder: "Salman",
                        component: h,
                      }),
                      (0, m.jsx)("p", {
                        id: "filled_error_help",
                        className:
                          "mt-2 text-md text-red-600 dark:text-red-400",
                        children: (0, m.jsx)(s.Bc, { name: "UserName" }),
                      }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: "px-[15px] w-full md:w-[33.333333%]",
                    children: [
                      (0, m.jsx)("label", {
                        htmlFor: "Dejection",
                        className:
                          "block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white",
                        children: "Dejection",
                      }),
                      (0, m.jsx)(s.gN, {
                        id: "Dejection",
                        type: "text",
                        name: "Dejection",
                        placeholder: "Ui Ux Designer",
                        component: h,
                      }),
                      (0, m.jsx)("p", {
                        id: "filled_error_help",
                        className:
                          "mt-2 text-md text-red-600 dark:text-red-400",
                        children: (0, m.jsx)(s.Bc, { name: "Dejection" }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsxs)("div", {
                className: "flex flex-wrap mx-[-15px] my-5",
                children: [
                  (0, m.jsxs)("div", {
                    className: "px-[15px] w-full md:w-[33.333333%]",
                    children: [
                      (0, m.jsx)("label", {
                        htmlFor: "Phone",
                        className:
                          "block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white",
                        children: "Mobile Number",
                      }),
                      (0, m.jsx)(s.gN, {
                        id: "Phone",
                        type: "number",
                        min: "0",
                        name: "Phone",
                        placeholder: "+8801880000000",
                        component: h,
                      }),
                      (0, m.jsx)("p", {
                        id: "filled_error_help",
                        className:
                          "mt-2 text-md text-red-600 dark:text-red-400",
                        children: (0, m.jsx)(s.Bc, { name: "Phone" }),
                      }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: "px-[15px] w-full md:w-[33.333333%]",
                    children: [
                      (0, m.jsx)("label", {
                        htmlFor: "Portfolio",
                        className:
                          "block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white",
                        children: "Portfolio",
                      }),
                      (0, m.jsx)(s.gN, {
                        id: "Portfolio",
                        type: "url",
                        name: "Portfolio",
                        placeholder: "https://www.example.com",
                        component: h,
                      }),
                    ],
                  }),
                  (0, m.jsx)("div", {
                    className: "px-[15px] w-full md:w-[33.333333%]",
                    children: (0, m.jsx)(s.gN, {
                      name: "Address",
                      children: function (e) {
                        var r = e.field,
                          t = e.form,
                          d = (t.touched, t.errors, e.meta);
                        return (0, m.jsxs)(m.Fragment, {
                          children: [
                            (0, m.jsx)("label", {
                              htmlFor: "Address",
                              className:
                                "block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white",
                              children: "Address",
                            }),
                            (0, m.jsx)(
                              "textarea",
                              (0, l.Z)(
                                (0, l.Z)(
                                  {
                                    id: "Address",
                                    name: "Address",
                                    placeholder: "Address",
                                  },
                                  r,
                                ),
                                {},
                                {
                                  className:
                                    "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                },
                              ),
                            ),
                            d.touched &&
                              d.error &&
                              (0, m.jsx)("p", {
                                id: "filled_error_help",
                                className:
                                  "mt-2 text-md text-red-600 dark:text-red-400",
                                children: d.error,
                              }),
                          ],
                        });
                      },
                    }),
                  }),
                ],
              }),
              (0, m.jsx)("div", {
                className: "flex flex-wrap mx-[-15px] my-5",
                children: (0, m.jsx)("div", {
                  className: "px-[15px] w-full",
                  children: (0, m.jsx)(s.gN, {
                    name: "CarrierObjective",
                    children: function (e) {
                      e.field;
                      var r = e.form,
                        t = (r.touched, r.errors, r.setFieldValue),
                        d = r.values,
                        a = e.meta;
                      return (0, m.jsxs)(m.Fragment, {
                        children: [
                          (0, m.jsx)("label", {
                            htmlFor: "CarrierObjective",
                            className:
                              "block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white",
                            children: "Carrier Objective",
                          }),
                          (0, m.jsx)(x(), {
                            onChange: function (e) {
                              return t("CarrierObjective", e);
                            },
                            value:
                              null === d || void 0 === d
                                ? void 0
                                : d.CarrierObjective,
                            theme: "snow",
                            bounds: ".app",
                          }),
                          a.touched &&
                            a.error &&
                            (0, m.jsx)("p", {
                              id: "filled_error_help",
                              className:
                                "mt-2 text-md text-red-600 dark:text-red-400",
                              children: a.error,
                            }),
                        ],
                      });
                    },
                  }),
                }),
              }),
            ],
          });
        },
        h = function (e) {
          var r = e.field,
            t = (e.form, (0, c.Z)(e, u));
          return (0, m.jsx)(
            "input",
            (0, l.Z)(
              (0, l.Z)((0, l.Z)({}, r), t),
              {},
              {
                className:
                  "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              },
            ),
          );
        },
        b = t(4373),
        g = t(8820),
        f = function (e) {
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(m.Fragment, {
                children: (0, m.jsx)(s.F2, {
                  name: "Education",
                  render: function (r) {
                    return (0, m.jsxs)("div", {
                      children: [
                        (0, m.jsxs)("h1", {
                          className:
                            "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-5",
                          children: [
                            "Add Education",
                            " ",
                            (0, m.jsx)("button", {
                              type: "button",
                              children: (0, m.jsx)(g.Lfi, {
                                onClick: function () {
                                  return r.push({
                                    Qualification: "",
                                    Percentage: "",
                                    Institution: "",
                                    YearRange: "",
                                  });
                                },
                              }),
                            }),
                          ],
                        }),
                        e.Education &&
                          e.Education.length > 0 &&
                          e.Education.map(function (e, t) {
                            return (0, m.jsxs)(
                              "div",
                              {
                                className: "flex flex-wrap mx-[-15px] mb-3",
                                children: [
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-4/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(y, {
                                        index: t,
                                        name: "Qualification",
                                        placeholder:
                                          "Diploma in Engineering Certificate",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Education.".concat(
                                            t,
                                            ".Qualification",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-2/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(y, {
                                        index: t,
                                        name: "Percentage",
                                        placeholder: "100%",
                                        type: "number",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Education.".concat(
                                            t,
                                            ".Percentage",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-3/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(y, {
                                        index: t,
                                        name: "Institution",
                                        placeholder:
                                          "Meherpur College of Engineering and Technology",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Education.".concat(
                                            t,
                                            ".Institution",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-2/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(y, {
                                        index: t,
                                        name: "YearRange",
                                        placeholder: "2010-2015",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Education.".concat(
                                            t,
                                            ".YearRange",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-1/12 md:mt-10",
                                    children: [
                                      (0, m.jsx)("label", {
                                        className: "text-white my-3 block",
                                      }),
                                      (0, m.jsx)("button", {
                                        type: "button",
                                        onClick: function () {
                                          return r.remove(t);
                                        },
                                        class:
                                          "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
                                        children: (0, m.jsx)(b.P1Z, {}),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              t,
                            );
                          }),
                      ],
                    });
                  },
                }),
              }),
              (0, m.jsx)(m.Fragment, {
                children: (0, m.jsx)(s.F2, {
                  name: "Skills",
                  render: function (r) {
                    return (0, m.jsxs)("div", {
                      children: [
                        (0, m.jsxs)("h1", {
                          className:
                            "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white  my-5",
                          children: [
                            "Add Skills",
                            " ",
                            (0, m.jsx)("button", {
                              type: "button",
                              children: (0, m.jsx)(g.Lfi, {
                                onClick: function () {
                                  return r.push({ Technology: "", Rating: "" });
                                },
                              }),
                            }),
                          ],
                        }),
                        e.Skills &&
                          e.Skills.length > 0 &&
                          e.Skills.map(function (e, t) {
                            return (0, m.jsxs)(
                              "div",
                              {
                                className: "flex flex-wrap mx-[-15px]  mb-3",
                                children: [
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-6/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(j, {
                                        index: t,
                                        name: "Technology",
                                        placeholder: "PHP",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Skills.".concat(
                                            t,
                                            ".Technology",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-5/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(j, {
                                        index: t,
                                        name: "Rating",
                                        placeholder: "100",
                                        type: "number",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Skills.".concat(t, ".Rating"),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsx)("div", {
                                    className:
                                      "px-[15px] w-full md:w-1/12 py-2 md:py-0 md:mt-[3rem]",
                                    children: (0, m.jsx)("button", {
                                      type: "button",
                                      onClick: function () {
                                        return r.remove(t);
                                      },
                                      class:
                                        "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
                                      children: (0, m.jsx)(b.P1Z, {}),
                                    }),
                                  }),
                                ],
                              },
                              t,
                            );
                          }),
                      ],
                    });
                  },
                }),
              }),
            ],
          });
        },
        j = function (e) {
          var r = e.index,
            t = e.name,
            d = e.placeholder,
            a = e.type,
            l = void 0 === a ? "text" : a;
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)("label", {
                htmlFor: "".concat(t),
                className: "text-white my-3 block",
                children: t,
              }),
              (0, m.jsx)(s.gN, {
                id: "".concat(t),
                type: l,
                name: "Skills.".concat(r, ".").concat(t),
                placeholder: d,
                className:
                  "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              }),
            ],
          });
        },
        y = function (e) {
          var r = e.index,
            t = e.name,
            d = e.placeholder,
            a = e.type,
            l = void 0 === a ? "text" : a;
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)("label", {
                htmlFor: "".concat(t),
                className: "text-white my-3 block",
                children: t,
              }),
              (0, m.jsx)(s.gN, {
                id: "".concat(t),
                type: l,
                name: "Education.".concat(r, ".").concat(t),
                placeholder: d,
                className:
                  "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              }),
            ],
          });
        },
        k = function (e) {
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(m.Fragment, {
                children: (0, m.jsx)(s.F2, {
                  name: "Experience",
                  render: function (r) {
                    return (0, m.jsxs)("div", {
                      children: [
                        (0, m.jsxs)("h1", {
                          className:
                            "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-5",
                          children: [
                            "Add Experience",
                            " ",
                            (0, m.jsx)("button", {
                              type: "button",
                              children: (0, m.jsx)(g.Lfi, {
                                onClick: function () {
                                  return r.push({
                                    Company: "",
                                    Website: "",
                                    Place: "",
                                    YearRange: "",
                                  });
                                },
                              }),
                            }),
                          ],
                        }),
                        e.Experience &&
                          e.Experience.length > 0 &&
                          e.Experience.map(function (e, t) {
                            return (0, m.jsxs)(
                              "div",
                              {
                                className: "flex flex-wrap mx-[-15px] mb-3",
                                children: [
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-4/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(v, {
                                        index: t,
                                        name: "Company",
                                        placeholder: "Glossy It",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Experience.".concat(
                                            t,
                                            ".Company",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-2/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(v, {
                                        index: t,
                                        name: "Website",
                                        placeholder: "https://www.glossyit.com",
                                        type: "url",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Experience.".concat(
                                            t,
                                            ".Website",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-3/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(v, {
                                        index: t,
                                        name: "Place",
                                        placeholder:
                                          "Avenue 6, Mirpur DOHS Dhaka - 1216, Bangladesh",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Experience.".concat(
                                            t,
                                            ".Place",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-2/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(v, {
                                        index: t,
                                        name: "YearRange",
                                        placeholder: "2010-2015",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Experience.".concat(
                                            t,
                                            ".YearRange",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-1/12 md:mt-10",
                                    children: [
                                      (0, m.jsx)("label", {
                                        className: "text-white my-3 block",
                                      }),
                                      (0, m.jsx)("button", {
                                        type: "button",
                                        onClick: function () {
                                          return r.remove(t);
                                        },
                                        class:
                                          "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
                                        children: (0, m.jsx)(b.P1Z, {}),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              t,
                            );
                          }),
                      ],
                    });
                  },
                }),
              }),
              (0, m.jsx)(m.Fragment, {
                children: (0, m.jsx)(s.F2, {
                  name: "Projects",
                  render: function (r) {
                    return (0, m.jsxs)("div", {
                      children: [
                        (0, m.jsxs)("h1", {
                          className:
                            "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white  my-5",
                          children: [
                            "Add Projects",
                            " ",
                            (0, m.jsx)("button", {
                              type: "button",
                              children: (0, m.jsx)(g.Lfi, {
                                onClick: function () {
                                  return r.push({
                                    Title: "",
                                    Description: "",
                                    YearRange: "",
                                    Link: "",
                                  });
                                },
                              }),
                            }),
                          ],
                        }),
                        e.Projects &&
                          e.Projects.length > 0 &&
                          e.Projects.map(function (e, t) {
                            return (0, m.jsxs)(
                              "div",
                              {
                                className: "flex flex-wrap mx-[-15px]  mb-3",
                                children: [
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-3/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(N, {
                                        index: t,
                                        name: "Title",
                                        placeholder: "Todo List Application",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Projects.".concat(t, ".Title"),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-4/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(N, {
                                        index: t,
                                        name: "Description",
                                        placeholder:
                                          "Todolist is daily taks notes",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Projects.".concat(
                                            t,
                                            ".Description",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-2/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(N, {
                                        index: t,
                                        name: "YearRange",
                                        placeholder: "2010-2015",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Experience.".concat(
                                            t,
                                            ".YearRange",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "px-[15px] w-full md:w-2/12 py-2 md:py-0",
                                    children: [
                                      (0, m.jsx)(N, {
                                        index: t,
                                        name: "Link",
                                        placeholder:
                                          "https://todo.glossyit.com",
                                        type: "url",
                                      }),
                                      (0, m.jsx)("p", {
                                        id: "filled_error_help",
                                        className:
                                          "mt-2 text-md text-red-600 dark:text-red-400",
                                        children: (0, m.jsx)(s.Bc, {
                                          name: "Projects.".concat(t, ".Link"),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsx)("div", {
                                    className:
                                      "px-[15px] w-full md:w-1/12 py-2 md:py-0 md:mt-[3rem]",
                                    children: (0, m.jsx)("button", {
                                      type: "button",
                                      onClick: function () {
                                        return r.remove(t);
                                      },
                                      class:
                                        "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
                                      children: (0, m.jsx)(b.P1Z, {}),
                                    }),
                                  }),
                                ],
                              },
                              t,
                            );
                          }),
                      ],
                    });
                  },
                }),
              }),
            ],
          });
        },
        N = function (e) {
          var r = e.index,
            t = e.name,
            d = e.placeholder,
            a = e.type,
            l = void 0 === a ? "text" : a;
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)("label", {
                htmlFor: "".concat(t),
                className: "text-white my-3 block",
                children: t,
              }),
              (0, m.jsx)(s.gN, {
                id: "".concat(t),
                type: l,
                name: "Projects.".concat(r, ".").concat(t),
                placeholder: d,
                className:
                  "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              }),
            ],
          });
        },
        v = function (e) {
          var r = e.index,
            t = e.name,
            d = e.placeholder,
            a = e.type,
            l = void 0 === a ? "text" : a;
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)("label", {
                htmlFor: "".concat(t),
                className: "text-white my-3 block",
                children: t,
              }),
              (0, m.jsx)(s.gN, {
                id: "".concat(t),
                type: l,
                name: "Experience.".concat(r, ".").concat(t),
                placeholder: d,
                className:
                  "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              }),
            ],
          });
        },
        w = t(2381),
        _ = i.Ry().shape({
          FullName: i.Z_().required("Full Name is Required"),
          UserName: i.Z_().required("User Name is Required"),
          Phone: i
            .Z_()
            .required("Mobile Number is Required")
            .matches(
              /(^(\+88|0088|88)?(01){1}[3456789]{1}(\d){8})$/,
              "Invalid Phone Number",
            ),
          Dejection: i.Z_().required("Dejection is Required"),
          Address: i.Z_().required("Address is Required"),
          CarrierObjective: i.Z_().required("Carrier Objective is Required"),
          Education: i
            .IX()
            .of(
              i
                .Ry()
                .shape({
                  Qualification: i.Z_().required("Qualification is Required"),
                  Percentage: i.Z_().required("Percentage is Required"),
                  Institution: i.Z_().required("Institution is Required"),
                  YearRange: i.Z_().required("YearRange is Required"),
                }),
            ),
          Skills: i
            .IX()
            .of(
              i
                .Ry()
                .shape({
                  Technology: i.Z_().required("Technology is Required"),
                  Rating: i.Z_().required("Rating is Required"),
                }),
            ),
          Experience: i
            .IX()
            .of(
              i
                .Ry()
                .shape({
                  Company: i.Z_().required("Company is Required"),
                  Website: i.Z_().required("Website is Required"),
                  Place: i.Z_().required("Place is Required"),
                  YearRange: i.Z_().required("Year Range is Required"),
                }),
            ),
          Projects: i
            .IX()
            .of(
              i
                .Ry()
                .shape({
                  Title: i.Z_().required("Title is Required"),
                  Description: i.Z_().required("Description is Required"),
                  YearRange: i.Z_().required("Year Range is Required"),
                  Link: i.Z_().required("Link is Required"),
                }),
            ),
        }),
        P = function (e) {
          var r = e.category,
            t = (0, n.v9)(function (e) {
              return e.User;
            }).UserDetails;
          return (0, m.jsx)(s.J9, {
            enableReinitialize: !0,
            initialValues: t,
            validationSchema: _,
            onSubmit: function (e) {
              w.Z.UserUpdate(e);
            },
            render: function (e) {
              var t = e.values;
              return (0, m.jsxs)(s.l0, {
                children: [
                  (0, m.jsx)(R, { categoryName: r, values: t }),
                  (0, m.jsx)("button", {
                    type: "submit",
                    className:
                      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                    children: "Update Profile",
                  }),
                ],
              });
            },
          });
        },
        R = function (e) {
          var r = e.categoryName,
            t = e.values;
          return "PersonalInfo" === r
            ? (0, m.jsx)(p, (0, l.Z)({}, t))
            : "SkillsEducation" === r
            ? (0, m.jsx)(f, (0, l.Z)({}, t))
            : "ExperienceProjects" === r
            ? (0, m.jsx)(k, (0, l.Z)({}, t))
            : void 0;
        },
        q = function () {
          var e = (0, a.useState)("PersonalInfo"),
            r = (0, d.Z)(e, 2),
            t = r[0],
            l = r[1];
          return (0, m.jsx)("section", {
            className: "bg-white dark:bg-gray-900 min-h-screen",
            children: (0, m.jsxs)("div", {
              className: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6",
              children: [
                (0, m.jsx)("h1", {
                  className: " text-xl dark:text-white",
                  children: "Update Profile",
                }),
                (0, m.jsx)("div", {
                  class: "mb-4 border-b border-gray-200 dark:border-gray-700",
                  children: (0, m.jsxs)("ul", {
                    class:
                      "flex flex-wrap -mb-px text-sm font-medium text-center",
                    children: [
                      (0, m.jsx)("li", {
                        class: "mr-2",
                        children: (0, m.jsx)("button", {
                          className:
                            "inline-block p-4 rounded-t-lg border-b-2 ".concat(
                              "PersonalInfo" === t
                                ? "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                                : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700",
                            ),
                          onClick: function () {
                            return l("PersonalInfo");
                          },
                          children: "Personal Info",
                        }),
                      }),
                      (0, m.jsx)("li", {
                        class: "mr-2",
                        children: (0, m.jsx)("button", {
                          className:
                            "inline-block p-4 rounded-t-lg border-b-2 ".concat(
                              "SkillsEducation" === t
                                ? "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                                : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700",
                            ),
                          onClick: function () {
                            return l("SkillsEducation");
                          },
                          children: "Skills and Education",
                        }),
                      }),
                      (0, m.jsx)("li", {
                        children: (0, m.jsx)("button", {
                          className:
                            "inline-block p-4 rounded-t-lg border-b-2 ".concat(
                              "ExperienceProjects" === t
                                ? "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                                : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700",
                            ),
                          onClick: function () {
                            return l("ExperienceProjects");
                          },
                          children: "Experience / Projects",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, m.jsx)("div", {
                  id: "myTabContent",
                  children: (0, m.jsx)(P, { category: t }),
                }),
              ],
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=827.8e6157d7.chunk.js.map
