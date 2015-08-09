<?php
/**
 * Created by PhpStorm.
 * User: jiangjiacai
 * Date: 2015/8/5
 * Time: 11:12
 */


$hotCity = array(
    array(
        array(
            'cityName' => '广州',
            'imgUrl' => '#',
            'url' => '#'
        ),
        array(
            'cityName' => '重庆',
            'imgUrl' => '#',
            'url' => '#'
        ),
        array(
            'cityName' => '北京',
            'imgUrl' => '#',
            'url' => '#'
        ),
        array(
            'cityName' => '上海',
            'imgUrl' => '#',
            'url' => '#'
        ),
        array(
            'cityName' => '深圳',
            'imgUrl' => '#',
            'url' => '#'
        )
    )
);
$travelList = array(
    'zhoubian' => array(
        array(
            'title' => '重庆一日游',
            'imgUrl' => 'images/img2.jpg',
            'url' => 'line/chongqing',
            'countPrice' => 300,
            'num' => 3,
            'price' => 100
        ),
        array(
            'title' => '重庆一日游',
            'imgUrl' => 'images/img2.jpg',
            'url' => 'line/chongqing',
            'countPrice' => 300,
            'num' => 3,
            'price' => 100
        ),
        array(
            'title' => '重庆一日游',
            'imgUrl' => 'images/img2.jpg',
            'url' => 'line/chongqing',
            'countPrice' => 300,
            'num' => 3,
            'price' => 100
        )
    ),
    'jingnei' => array(
        array(
            'title' => '重庆一日游',
            'imgUrl' => 'images/img2.jpg',
            'url' => 'line/chongqing',
            'countPrice' => 300,
            'num' => 3,
            'price' => 100
        ),
        array(
            'title' => '重庆一日游',
            'imgUrl' => 'images/img2.jpg',
            'url' => 'line/chongqing',
            'countPrice' => 300,
            'num' => 3,
            'price' => 100
        ),
        array(
            'title' => '重庆一日游',
            'imgUrl' => 'images/img2.jpg',
            'url' => 'line/chongqing',
            'countPrice' => 300,
            'num' => 3,
            'price' => 100
        )
    )
);

$indexJson = array(
    'topBanner' => array(
        '0' => "images/banner.jpg",
        '1' => "images/banner.jpg",
        '2' => "images/banner.jpg"
    ),
    'hotCity' => $hotCity,
    'main' => array(
        'travelList' => $travelList,
        'menpiao' => array(),
        'jiudian' => array(
            array(
                'title' => '重庆一日游',
                'imgUrl' => 'images/img2.jpg',
                'url' => 'line/chongqing',
                'countPrice' => 300,
                'num' => 3,
                'price' => 100
            ),
            array(
                'title' => '重庆一日游',
                'imgUrl' => 'images/img2.jpg',
                'url' => 'line/chongqing',
                'countPrice' => 300,
                'num' => 3,
                'price' => 100
            ),
            array(
                'title' => '重庆一日游',
                'imgUrl' => 'images/img2.jpg',
                'url' => 'line/chongqing',
                'countPrice' => 300,
                'num' => 3,
                'price' => 100
            )
        )
    )
);

$travel = array(
    'hotCity' => $hotCity,
    'travelList' => $travelList
);

/**
 * 预定需知
 */
$travelMsg = array(
    'title' => '费用&预订须知',
    'include' => '1、交通：昆明-加尔各答往返团队经济舱机票含机场建设税；
2、当地用车：当地旅游车；
3、住宿：5晚当地酒店双人标准间；
4、门票：维多利亚纪念堂首道大门票；',
    'noInclude' => '1、单人房差；
2、签证：本产品申请签证中准备相关材料所需的制作、手续费，如所需的公证书、认证费 及其他额外费用；
3、出入境个人物品海关征税，超重行李的托运费、保管费
4、不含华东地区-昆明段联运往返机票；',
    'warning' => '1、住宿只含每人每天一床位。若出现单男单女，客人可以选择补房差或加床（加床一般为弹簧床或折叠床或其他床型）；
2、请于出团前10个工作日将签证所需材料收齐并且交于我处（节假日，周末除外），材料准备方面如有特殊情况 请来电咨询客服。
3、境外酒店一般不提供一次性用品，建议自备拖鞋、毛巾、洗漱用品、转换插座等物品；'
);

/**
 * 机票选择
 */
$planeChoose = array(
  'curCity' => array(
      'cityName' => '北京',
      'cityCode' => 'BJS'
  ),
    'oftenList' => array(
        array(
            'cityName' => '重庆',
            'cityCode' => 'CQ'
        ),
        array(
            'cityName' => '上海',
            'cityCode' => 'SH'
        )
    ),
    'hotCity' => $hotCity
);


$seatChoose = array(
    'dCity' => '深圳',
    'aCity' => '北京',
    'dCode' => 'SZ',
    'aCode' => 'BJS',
    'lists' => array(
        array(
            'type' => '(经济舱)3.2折',
            'price' => 1250.00,
            'msg' => '说明'
        ),
        array(
            'type' => '(经济舱)3.2折',
            'price' => 1250.00,
            'msg' => '说明'
        ),
        array(
            'type' => '(经济舱)3.2折',
            'price' => 1250.00,
            'msg' => '说明'
        )
    )
);


$travelDetail = array(
    'topBanner' => array(
        'title' => '<大理-昆明-丽江双飞6日游>4晚挂五，1晚温泉，带你走 进最美的城市',
        'price' => 3620,
        'priceCal' => array(
            array(
                'month' => 7,
                'today' => 28,
                'price' => 3620
            ),
            array(
                'month' => 7,
                'today' => 29,
                'price' => 3620
            ),
            array(
                'month' => 7,
                'today' => 30,
                'price' => 3620
            )
        )
    ),
    'proContent' => '杭州的春天是美丽的，在那和煦的阳光下，在花草泥土的芬芳中，满目清翠，令人不得不 心醉。而杭州美,西湖更美.阳春三月，莺飞草长。 ',
//    行程安排
    'detail' => array(
        array(
            'dCity' => '西安',
            'aCity' => '成都',
            'meal' => false,
            'vehicle' => '公交',
            'content' => '07:00上海博物馆南门集合出发，10:00左右到达杭州，随后漫步 【苏堤】，感受江南的如画美景。 --中午导游安排午餐 ，--随后 巴士赴（蚕丝博物馆）了解丝绸文化渊源随后赴梅家坞茶园欣赏茶 园风光。 --随后赴【万松书院】景区游览，了解梁山伯与祝英台的 爱情故事。 --17：30在黄龙洞景区停车集合，换大巴送苏州酒店 休息 。'
        )
    ),
    'warningUrl' => '#'
);
header('Content-Type:text/json;');
echo json_encode($hotCity);