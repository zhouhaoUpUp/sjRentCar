if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderForm/cancel/cancel?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderForm/finish/finish?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderForm/waitCar/waitCar?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderForm/onRoad/onRoad?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderForm/sendCar/sendCar?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/government/comList/comList?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/government/authenOne/authenOne?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/government/authenTwo/authenTwo?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/government/authenThree/authenThree?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/government/authenType/authenType?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/government/authenSearch/authenSearch?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/longRent/carDemand/carDemand?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/longRent/carList/carList?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/longRent/carFeedBack/carFeedBack?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cancelFetchCar/cancelRuleOne/cancelRuleOne?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cancelFetchCar/cancelRuleTwo/cancelRuleTwo?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cancelFetchCar/inhand/inhand?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cancelFetchCar/inadvance/inadvance?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cancelFetchCar/popwin/popwin?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cancelFetchCar/cancelOrder/cancelOrder?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cancelFetchCar/orderRelet/orderRelet?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cancelFetchCar/refondDefeat/refondDefeat?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cancelFetchCar/refondSucc/refondSucc?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cancelFetchCar/changeTime/changeTime?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/evaluate/evaluateSucc/evaluateSucc?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/evaluate/addEvaluate/addEvaluate?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/evaluate/myEvaluate/myEvaluate?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/invoice/invoManage/invoManage?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/invoice/invoRentCar/invoRentCar?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/invoice/invoGover/invoGover?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/invoice/invoPerson/invoPerson?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/invoice/invoCompany/invoCompany?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/invoice/invoList/invoList?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/invoice/invoHistory/invoHistory?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/placeOrder/carDetail/carDetail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/placeOrder/carDetailGorve/carDetailGorve?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/placeOrder/remakeOneself/remakeOneself?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/placeOrder/remakeThemself/remakeThemself?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/placeOrder/carStatus/carStatus?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/placeOrder/selectCom/selectCom?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/placeOrder/selectTime/selectTime?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/placeOrder/carEvaluate/carEvaluate?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/placeOrder/servicesTerms/servicesTerms?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/reletReturnCar/cancelRule/cancelRule?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/reletReturnCar/cancelorderOne/cancelorderOne?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/reletReturnCar/cancelorderTwo/cancelorderTwo?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/reletReturnCar/cancelOrderThree/cancelOrderThree?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/reletReturnCar/advanceRuturn/advanceRuturn?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/reletReturnCar/advanceRuturnApply/advanceRuturnApply?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/reletReturnCar/advanceReturnApplyN/advanceReturnApplyN?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/reletReturnCar/returnAgain/returnAgain?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/reletReturnCar/advanceRule/advanceRule?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/reletReturnCar/reletCar/reletCar?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/reletReturnCar/reletDispose/reletDispose?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/reletReturnCar/reletApply/reletApply?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/protectNum/protectDefeat/protectDefeat?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/protectNum/protectNum/protectNum?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderFormList/orderFormTrue/orderFormTrue?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderFormList/orderFormFalse/orderFormFalse?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/contact/personalCenter/personalCenter?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/contact/contactManage/contactManage?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/contact/contactWin/contactWin?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}