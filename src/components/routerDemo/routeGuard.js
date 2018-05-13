const globalGuard = (to, from, next) => {
    console.log("全局！！！！！！！")
    console.log(to);
    console.log(from);
    next();
  }

  export { globalGuard }