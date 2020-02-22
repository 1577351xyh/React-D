import React from "react";
import { BrowserRouter, Link, Route ,Switch, Redirect } from "react-router-dom";

//Switch 精准匹配

export default function RouterTest() {
  return (
    <BrowserRouter>
      <nav>
        {/* 导航 */}
        <Link to="/">商品列表</Link>
        <Link to="/management">商品管理</Link>
      </nav> <div>
        {/* 直接在组件中定义路由 */}
        {/* 根路由要添加exact，render可以实现条件渲染 */}
        <Route exact path="/" component={ProductList} /> 
        <Route path="/management" component={ProductMgt} />
      </div>
    </BrowserRouter>
  );
}

function ProductList(props) {
  return <div>ProductList</div>;
}

function ProductMgt(props) {
  return <div>ProductMgt</div>;
}