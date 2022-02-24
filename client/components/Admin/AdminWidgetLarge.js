import React from 'react';
import './admin.css';

const AdminWidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={'ad-wgt-lg-btn ' + type}>{type}</button>;
  };

  return (
    <div className="ad-wgt-lg">
      <h3 className="ad-wgt-lg-tle">Latest Orders</h3>
      <table className="ad-wgt-lg-tbl">
        <tbody className="ad-wgt-lg-tr">
          <tr>
            <th className="ad-wgt-lg-th">Customer</th>
            <th className="ad-wgt-lg-th">Date</th>
            <th className="ad-wgt-lg-th">Amount</th>
            <th className="ad-wgt-lg-th">Status</th>
          </tr>
        </tbody>
        <tbody className="ad-wgt-lg-tr">
          <tr>
            <td className="ad-wgt-lg-usr">
              <img
                src="https://media.muzooka.com/images/6792348/landscape/16x9/large2.jpg"
                className="ad-wgt-lg-img"
              />
              <span className="ad-wgt-lg-nme">Jack White</span>
            </td>
            <td className="ad-wgt-lg-dte">Feb 22 2022</td>
            <td className="ad-wgt-lg-amt">$974.95</td>
            <td className="ad-wgt-lg-sts">
              <Button type="Confirmed" />
            </td>
          </tr>
        </tbody>
        <tbody className="ad-wgt-lg-tr">
          <tr>
            <td className="ad-wgt-lg-usr">
              <img
                src="https://i0.wp.com/www.culturesonar.com/wp-content/uploads/2021/03/jimmy-page-getty.jpg"
                className="ad-wgt-lg-img"
              />
              <span className="ad-wgt-lg-nme">Jimmy Page</span>
            </td>
            <td className="ad-wgt-lg-dte">Feb 22 2022</td>
            <td className="ad-wgt-lg-amt">$5674.95</td>
            <td className="ad-wgt-lg-sts">
              <Button type="Pending" />
            </td>
          </tr>
        </tbody>
        <tbody className="ad-wgt-lg-tr">
          <tr>
            <td className="ad-wgt-lg-usr">
              <img
                src="https://media.npr.org/assets/img/2018/11/20/cred-alex-bailey-for-twentieth-c-fox-e4c3aa793f719c103e3ee3c27a34c52d183670df.jpg"
                className="ad-wgt-lg-img"
              />
              <span className="ad-wgt-lg-nme">Freddy Mercury</span>
            </td>
            <td className="ad-wgt-lg-dte">Feb 22 2022</td>
            <td className="ad-wgt-lg-amt">$2374.95</td>
            <td className="ad-wgt-lg-sts">
              <Button type="Confirmed" />
            </td>
          </tr>
        </tbody>
        <tbody className="ad-wgt-lg-tr">
          <tr>
            <td className="ad-wgt-lg-usr">
              <img
                src="https://static.wikia.nocookie.net/beatles/images/d/d9/853de2b8224c681079a3a66111bd97ec.jpg"
                className="ad-wgt-lg-img"
              />
              <span className="ad-wgt-lg-nme">Paul McCartney</span>
            </td>
            <td className="ad-wgt-lg-dte">Feb 22 2022</td>
            <td className="ad-wgt-lg-amt">$16884.95</td>
            <td className="ad-wgt-lg-sts">
              <Button type="Confirmed" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminWidgetLarge;
