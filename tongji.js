function recruitInfo(strJson) {
    var a1 = 0,a2=0;
    var b1 = 0,b2 = 0,b3 = 0,b4 = 0,b5=0,b6=[];
    var c1 =0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=[];
    var d1 = 0,d2=0,d3=0,d4=0,d5=[];
    var e =[];
    var totalInfo = JSON.parse(strJson)
    console.log(totalInfo.length);
    totalInfo.forEach(function (item) {
        for (var key in item) {
            if (key.indexOf('知道') !== -1) {
                switch (item[key]){
                    case '早就知道了':
                        a1 = a1+1;
                        break;
                    case '不好意思，今天才知道':
                        a2 = a2+1;
                        break;
                    default:
                        break;
                }
            }
            if (key.indexOf('渠道') !== -1) {
                switch (item[key]){
                    case '学校就业网/BBS':
                        b1 = b1+1;
                        break;
                    case '微信公众号':
                        b2 = b2+1;
                        break;
                    case '老师邮件、短信':
                        b3 = b3 +1;
                        break;
                    case 'QQ群、微信群或口头通知':
                        b4 = b4+1;
                        break;
                    case '海报、传单等':
                        b5 = b5+1;
                        break;
                    default:
                        b6.push(item[key])
                        break;
                }
            }
            if (key.indexOf('求职')!==-1) {
                var _val = item[key]
                if (_val.indexOf('行业及公司发展前景') !== -1) {
                    c1= c1+1;
                }
                if (_val.indexOf('公司性质') !== -1) {
                    c2= c2+1;
                }
                if (_val.indexOf('公司规模') !== -1) {
                    c3= c3+1;
                }
                if (_val.indexOf('公司提供的发展机会及培训体系') !== -1) {
                    c4= c4+1;
                }
                if (_val.indexOf('解决户口') !== -1) {
                    c5= c5+1;
                }
                if (_val.indexOf('薪酬福利') !== -1) {
                    c6= c6+1;
                }
                if (_val.indexOf('办公地点') !== -1) {
                    c7= c7+1;
                }
                if (_val.indexOf('其他') !== -1) {
                    c8.push('自我能力的应用和发展')
                }
            }
            if (key.indexOf('环节') !== -1) {
                switch (item[key]){
                    case '详细公司介绍':
                        d1 = d1+1;
                        break;
                    case '创始人或嘉宾背景及宣讲效果':
                        d2 = d2+1;
                        break;
                    case 'Q&A环节':
                        d3 = d3+1;
                        break;
                    case '现场奖品':
                        d4 = d4+1;
                        break;
                    default:
                        d5.push(item[key]);
                        break;
                }
            }
            if (key.indexOf('期待')!==-1) {
                e.push(item[key])
            }
        }
    })
    console.log('a:'+a1+';');
    console.log('b:'+a2+';');
    console.log('a:'+b1+';');
    console.log('b:'+b2+';');
    console.log('c:'+b3+';');
    console.log('d:'+b4+';');
    console.log('e:'+b5+';');
    console.log('f:'+b6+';');
    console.log('a:'+c1+';');
    console.log('b:'+c2+';');
    console.log('c:'+c3+';');
    console.log('d:'+c4+';');
    console.log('e:'+c5+';');
    console.log('f:'+c6+';');
    console.log('g:'+c7+';');
    console.log('h:'+c8+';');
    console.log('a:'+d1+';');
    console.log('b:'+d2+';');
    console.log('c:'+d3+';');
    console.log('d:'+d4+';');
    console.log('e:'+d5+';');
    console.log(e);
}