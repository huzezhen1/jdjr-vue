(function(win, doc) {
  // 给hotcss开辟个命名空间，别问我为什么，我要给你准备你会用到的方法，免得用到的时候还要自己写。
  const hotcss = {}
;(() => {
    // 根据devicePixelRatio自定计算scale
    // 可以有效解决移动端1px这个世纪难题。
    let viewportEl = doc.querySelector('meta[name="viewport"]')

    const hotcssEl = doc.querySelector('meta[name="hotcss"]')

    let dpr = win.devicePixelRatio || 1

    let maxWidth = 540

    let designWidth = 0

    dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1)

    // 允许通过自定义name为hotcss的meta头，通过initial-dpr来强制定义页面缩放
    if (hotcssEl) {
      const hotcssCon = hotcssEl.getAttribute('content')
      if (hotcssCon) {
        // eslint-disable-next-line no-useless-escape
        const initialDprMatch = hotcssCon.match(/initial-dpr=([\d\.]+)/)
        if (initialDprMatch) {
          dpr = parseFloat(initialDprMatch[1])
        }
        // eslint-disable-next-line no-useless-escape
        const maxWidthMatch = hotcssCon.match(/max-width=([\d\.]+)/)
        if (maxWidthMatch) {
          maxWidth = parseFloat(maxWidthMatch[1])
        }
        // eslint-disable-next-line no-useless-escape
        const designWidthMatch = hotcssCon.match(/design-width=([\d\.]+)/)
        if (designWidthMatch) {
          designWidth = parseFloat(designWidthMatch[1])
        }
      }
    }

    doc.documentElement.setAttribute('data-dpr', dpr)
    hotcss.dpr = dpr

    doc.documentElement.setAttribute('max-width', maxWidth)
    hotcss.maxWidth = maxWidth

    if (designWidth) {
      doc.documentElement.setAttribute('design-width', designWidth)
    }
    hotcss.designWidth = designWidth // 保证px2rem 和 rem2px 不传第二个参数时, 获取hotcss.designWidth是undefined导致的NaN

    const scale = 1 / dpr

    const content = `width=device-width, initial-scale=${scale}, minimum-scale=${scale}, maximum-scale=${scale}, user-scalable=no`
    if (viewportEl) {
      viewportEl.setAttribute('content', content)
    }
    else {
      viewportEl = doc.createElement('meta')
      viewportEl.setAttribute('name', 'viewport')
      viewportEl.setAttribute('content', content)
      doc.head.appendChild(viewportEl)
    }
  })()

  hotcss.px2rem = function(px, designWidth) {
    let dw = designWidth
    // 预判你将会在JS中用到尺寸，特提供一个方法助你在JS中将px转为rem。就是这么贴心。
    if (!designWidth) {
      // 如果你在JS中大量用到此方法，建议直接定义 hotcss.designWidth 来定义设计图尺寸;
      // 否则可以在第二个参数告诉我你的设计图是多大。
      dw = parseInt(hotcss.designWidth, 10)
    }

    return parseInt(px, 10) * 320 / dw / 20
  }

  hotcss.rem2px = function(rem, designWidth) {
    let dw = designWidth
    // 新增一个rem2px的方法。用法和px2rem一致。
    if (!designWidth) {
      dw = parseInt(hotcss.designWidth, 10)
    }
    // rem可能为小数，这里不再做处理了
    return rem * 20 * dw / 320
  }

  hotcss.mresize = function() {
    // 对，这个就是核心方法了，给HTML设置font-size。
    let innerWidth = doc.documentElement.getBoundingClientRect().width || win.innerWidth

    if (hotcss.maxWidth && (innerWidth / hotcss.dpr > hotcss.maxWidth)) {
      innerWidth = hotcss.maxWidth * hotcss.dpr
    }

    if (!innerWidth) {
      return
    }

    doc.documentElement.style.fontSize = `${innerWidth * 20 / 320}px`
    hotcss.callback && hotcss.callback()
  }
  hotcss.mresize()
  // 直接调用一次

  win.addEventListener('resize', () => {
    win.clearTimeout(hotcss.tid)
    hotcss.tid = win.setTimeout(hotcss.mresize, 33)
  }, false)
  // 绑定resize的时候调用

  win.addEventListener('load', hotcss.mresize, false)
  // 防止不明原因的bug。load之后再调用一次。

  win.setTimeout(() => {
    hotcss.mresize()
    // 防止某些机型怪异现象，异步再调用一次
  }, 333)

  win.hotcss = hotcss // 命名空间暴露给你，控制权交给你，想怎么调怎么调。
})(window, document)
