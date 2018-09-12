const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // message:'该页面正在开发中......'
src1:'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=dcacf438d0ca7bcb6976cf7ddf600006/6d81800a19d8bc3e1f97cb31858ba61ea9d345aa.jpg',
src2:'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=28ac86a7fdedab64607f4592965fc4a6/3bf33a87e950352a4affdd645543fbf2b3118bc4.jpg',
src3:'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D5%2C0%2C504%2C333%3Bc0%3Dbaike80%2C5%2C5%2C80%2C26/sign=e953dc690323dd54353cfd28ec3c9fee/c83d70cf3bc79f3dda9c443db0a1cd11728b29b9.jpg',
src4:'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=75686f5d0a3b5bb5aada28ac57babe5c/c83d70cf3bc79f3da5808ac6b3a1cd11738b29e6.jpg'
  },

  toHistory: function () {
    wx.navigateTo({
      url: '../history/history',
    })
  },

  toEvent: function () {
    wx.navigateTo({
      url: '../event/event',
    })
  },

  toUniverse: function () {
    wx.navigateTo({
      url: '../universe/universe',
    })
  },

  toGemstone: function () {
    wx.navigateTo({
      url: '../gemstone/gemstone',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})