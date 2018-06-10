 // register the grid component
 Vue.component('demo-grid', {
    template: '#grid-template',
    props: {
      data: Array,
      columns: Array,
      filterKey: String
    },
    data: function () {
      var sortOrders = {}
      this.columns.forEach(function (key) {
        sortOrders[key] = 1
      })
      return {
        sortKey: '',
        sortOrders: sortOrders
      }
    },
    methods: {
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      }
    }
  })
  
  // highlight filter
  Vue.filter('highlight', function(words, query){
      var iQuery = new RegExp(query, "ig");
      return words.toString().replace(iQuery, function(matchedTxt,a,b){
          return ('<span class=\'highlight\'>' + matchedTxt + '</span>');
      });
  });
  
  // songsvue render
  var songsvue = new Vue({
    el: '#app',
    data: {
      searchQuery: '',
      gridColumns: [ 'year','en','kor','description'],
      gridData: [
        { year:2017, 
          en:'techenphobia',
          kor:'테크노포비아',
          description:'정보통신기술(ICT) 기기와 인공 지능(AI) 같은 첨단 기술에 대한 공포감이나 적대감을 느끼는 것. ' 
        },
        { year:2017, 
          en:'doxware',
          kor:'독스웨어',
          description:'개인에게 피해를 줄 수 있는 파일이나 정보를 미끼로 금전을 요구하는 악성코드. 독스웨어는 해킹한 개인정보를 온라인에 공개하는 것을 의미하는 독싱(doxing)과 이를 이용하여 금전적 이득을 취하는 랜섬웨어(ransomware)를 합친 용어이다. ' 
        },
        { year:2017, 
          en:'smart grid',
          kor:'스마트 그리드',
          description:'정보통신기술(ICT)을 접목하여 전력망의 에너지 효율은 물론, 신뢰성(reliability), 안전성(security), 그리고 복원력(resiliency)이 향상된 지능형 전력망. ' 
        },
        { year:2017, 
          en:'5G, IMT-2020',
          kor:'5세대 이동통신',
          description:'4세대 LTE-Advanced에 이은 차세대 통신 기술이다. 5세대 이동통신은 최고 전송 속도가 초당 1기가비트(Gbps) 수준이다. 초고화질 영상이나 3D 입체영상, 360도 동영상, 홀로그램 등 대용량 데이터 전송에 필수적이다. ' 
        },
        { year:2017, 
          en:'salami technique',
          kor:'살라미 기술',
          description:'불법 프로그램 기술의 일종. 이탈리아에서 생산되는 소시지인 살라미를 얇게 썰어낸다는 의미로 사용되는 프로그램 작성(programming) 기술을 말한다. ' 
        },
        { year:2017, 
          en:'privacy masking',
          kor:'프라이버시 마스킹',
          description:'이미지나 영상 등에서 다른 공개된 정보와 결합되어 개인을 식별하는 데 도구가 될 수 있는 민감 데이터(예: 식별자)를 보이지 않도록 처리하여 식별할 수 없도록 하는 것. ' 
        },
        { year:2016, 
          en:'enhanced Mobile BroadBand',
          kor:'초광대역 이동 통신',
          description:'IMT-2020(5G) 이동통신에서 멀티미디어 콘텐츠 같은 고화질의 데이터 이용 시 사용자가 느끼는 초광대역 서비스' 
        },
        { year:2016, 
          en:'Mixed Reality, MR',
          kor:'혼합 현실',
          description:'현실 세계(real world)와 가상 세계(virtual world)가 혼합된 상태. 혼합 현실은 현실을 기반으로 가상 정보를 부가하는 증강 현실(AR: Augmented Reality)과 가상 환경에 현실 정보를 부가하는 증강 가상(AV: Augmented Virtuality)의 의미를 포함한다. 즉, 혼합 현실은 완전 가상 세계(가상 현실, Virtual Reality)가 아닌 현실과 가상이 자연스럽게 연결된 스마트 환경을 사용자에게 제공하여, 풍부한 체험을 제공한다.' 
        },
        { year:2016, 
          en:'The Fourth Industrial Revolution',
          kor:'제4차 산업혁명',
          description:'인공 지능, 사물 인터넷, 빅데이터, 모바일 등 첨단 정보통신기술이 경제·사회 전반에 융합되어 혁신적인 변화가 나타나는 차세대 산업혁명' 
        },
        { year:2015, 
          en:'Chief Data Officer, CDO',
          kor:'데이터 최고 책임자,',
          description:'기업에서 가치를 창출할 수 있는 양질의 데이터를 발굴하여 기업 자산으로 관리하고 활용할 수 있도록 데이터 통합 관리(data governance)를 총괄 담당하는 최고 임원' 
        },

      ]
    }
  })