export const newsLetterTemplate = (email: string) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>
  <div
    style="
      display: none;
      overflow: hidden;
      line-height: 1px;
      opacity: 0;
      max-height: 0;
      max-width: 0;
    "
  >
    You have been successfully subscribed to our newsletter
    <div>
       ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
    </div>
  </div>

  <body
    style="
      background-color: #efeef1;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
    "
  >
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width: 580px; margin: 30px auto; background-color: #ffffff"
    >
      <tbody>
        <tr style="width: 100%">
          <td>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="
                display: flex;
                justify-content: center;
                aling-items: center;
                padding: 30px;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <img
                      src="${process.env.NEXT_URL}/assets/logo.png"
                      style="
                        display: block;
                        outline: none;
                        border: none;
                        text-decoration: none;
                      "
                      width="114"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="width: 100%; display: flex"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody style="width: 100%">
                        <tr style="width: 100%">
                          <td
                            data-id="__react-email-column"
                            style="
                              border-bottom: 1px solid rgb(238, 238, 238);
                              width: 249px;
                            "
                          ></td>
                          <td
                            data-id="__react-email-column"
                            style="
                              border-bottom: 1px solid rgb(67, 82, 165);
                              width: 102px;
                            "
                          ></td>
                          <td
                            data-id="__react-email-column"
                            style="
                              border-bottom: 1px solid rgb(238, 238, 238);
                              width: 249px;
                            "
                          ></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="padding: 5px 20px 10px 20px"
            >
              <tbody>
                <tr>
                  <td>
                    <p
                      style="font-size: 14px; line-height: 1.5; margin: 16px 0"
                    >
                      Hi
                      <!-- -->${email}<!-- -->,
                    </p>

                    <p
                      style="font-size: 14px; line-height: 1.5; margin: 16px 0"
                    >
                      Thank you for choosing us. We are committed to keeping you
                      informed with the latest updates and promotions. Stay
                      tuned for upcoming news and special offers to ensure you
                      receive the best care possible.
                    </p>
                    <p
                      style="font-size: 14px; line-height: 1.5; margin: 16px 0"
                    >
                      Thanks,<br />MediAppoint Support Team
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr
              style="
                width: 100%;
                border: none;
                border-top: 1px solid #eaeaea;
                border-color: #dfe1e4;
              "
            />
            <p
              style="
                font-size: 12px;
                line-height: 24px;
                color: #8898aa;
                text-decoration-line: none;
              "
            >
              Amine Jguirim, Monastir, TN 5035
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>

    `;
};
