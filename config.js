/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이고은",
    nameEn: "GOEUN",
    father: "이상운",
    mother: "박미현",
    fatherDeceased: true,
    motherDeceased: false
  },

  bride: {
    name: "이민우",
    nameEn: "MINWOO",
    father: "이종문",
    mother: "이진숙",
    fatherDeceased: true,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-29",
    time: "15:20",
    venue: "상암 DMC 타워웨딩 2층",
    hall: "그랜드볼룸홀",
    address: "서울 마포구 성암로 189",
    tel: "주차 안내 : 웨딩홀 지하2~지하6층 주차장\n무료주차 2시간",
    
    mapLinks: {
      kakao: "https://map.kakao.com/?urlX=477459.9999999982&urlY=1132575.0000000023&urlLevel=3&itemId=18285577&q=DMC%ED%83%80%EC%9B%8C%EC%9B%A8%EB%94%A9&srcid=18285577&map_type=TYPE_MAP",
      naver: "https://map.naver.com/p/search/%EC%83%81%EC%95%94DMC%ED%83%80%EC%9B%8C%EC%9B%A8%EB%94%A9/place/36615076?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202605101538&locale=ko&svcName=map_pcv5&searchText=%EC%83%81%EC%95%94DMC%ED%83%80%EC%9B%8C%EC%9B%A8%EB%94%A9"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다.\n\n결혼식장의 꽃은 신부 한사람으로 충분합니다.\n화환 대신 마음만 감사히 받겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "피로연 안내",
    content: "먼 걸음해주시기 어려운 분들을 모시고자\n피로연 자리를 마련하였습니다.\n귀한 발걸음으로 두 사람의 앞날을\n축하하여 주시면 더 큰 기쁨과 격려가 되겠습니다.\n\n8월 22일 토요일 12:00~13:30\n안계코리안웨딩2층(경북 의성군 안계면 안계길 85)"
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "이민우", name: "", bank: "카카오뱅크", number: "3333-16-0363798" },
      { role: "이진숙", name: "", bank: "우체국", number: "700435-02-000020" }
    ],
    bride: [
      { role: "이고은", name: "", bank: "카카오뱅크", number: "3333-08-6544623" },
      { role: "박미현", name: "", bank: "국민은행", number: "827501-01-044377" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2026년 8월 29일, 소중한 분들을 초대합니다."
  }
};
