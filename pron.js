/* 영어 → 한글 발음 사전 (초급 모드에서 영어 문장 아래에 보여줘요)
 * 문장을 단어별로 풀어서 이 사전으로 이어 붙여요.
 * - 새 단어가 생겨서 발음이 안 보이면 아래에 `단어:'발음'` 을 한 줄 추가하면 돼요. (영어는 소문자로)
 * - 한 문장만 따로 바꾸고 싶으면 content.js 에서 P("영어","뜻","😀","발음") 처럼 네 번째에 적어요.
 */
const PRON={
a:'어',about:'어바웃',after:'애프터',again:'어게인',all:'올',am:'앰',and:'앤',any:'애니',are:'얼',ask:'애스크',at:'앳',
back:'백',bad:'배드',bag:'백',ball:'볼',balloon:'벌룬',bathroom:'배쓰룸',be:'비',bear:'베어',because:'비커즈',bed:'베드',big:'빅',bird:'버드',birthday:'버쓰데이',bite:'바이트',blue:'블루',book:'북',borrow:'바로우',boy:'보이',bread:'브레드',brother:'브라더',bus:'버스',but:'벗',buy:'바이',by:'바이',
call:'콜',can:'캔',"can't":'캔트',candy:'캔디',car:'카',cards:'카즈',carrots:'캐럿츠',cat:'캣',cats:'캣츠',chair:'체어',character:'캐릭터',close:'클로즈',cold:'콜드',come:'컴',cookie:'쿠키',crayon:'크레이언',cup:'컵',cute:'큐트',
dad:'대드',dance:'댄스',day:'데이',delicious:'딜리셔스',did:'디드',dinner:'디너',do:'두',dog:'도그',dogs:'도그즈',doing:'두잉',dollars:'달러즈',"don't":'돈트',done:'던',draw:'드로',drawing:'드로잉',drink:'드링크',
eat:'잇',eating:'이팅',elevator:'엘리베이터',every:'에브리',excited:'익싸이티드',excuse:'익스큐즈',exit:'엑싯',expensive:'익스펜시브',
family:'패밀리',favorite:'페이버릿',find:'파인드',finish:'피니시',first:'퍼스트',five:'파이브',fluffy:'플러피',food:'푸드',for:'포',friend:'프렌드',friends:'프렌즈',from:'프럼',full:'풀',fun:'펀',funny:'퍼니',
game:'게임',games:'게임즈',get:'겟',girl:'걸',give:'기브',go:'고',going:'고잉',good:'굿',great:'그레이트',green:'그린',
had:'햇',hand:'핸드',happy:'해피',hat:'햇',have:'해브',he:'히',"he's":'히즈',hello:'헬로',help:'헬프',her:'허',here:'히어',"here's":'히어즈',hi:'하이','hide-and-seek':'하이드 앤 씨크',him:'힘',his:'히즈',hmm:'흠',home:'홈',homework:'홈워크',hot:'핫',house:'하우스',how:'하우',hungry:'헝그리',hurt:'허트',
i:'아이',"i'm":'아임',"i'll":'아일',"i've":'아이브',ice:'아이스','ice-cream':'아이스크림',if:'이프',in:'인',is:'이즈',it:'잇',"it's":'잇츠',
job:'잡',juice:'주스',jump:'점프',just:'저스트',
kitty:'키티',know:'노우',korea:'코리아',
late:'레이트',let:'렛',"let's":'렛츠',library:'라이브러리',like:'라이크',little:'리틀',long:'롱',look:'룩',lost:'로스트',love:'러브',
make:'메이크',me:'미',meal:'밀',meet:'미트',milk:'밀크',mina:'미나',minutes:'미니츠',mom:'맘',mommy:'마미',monchhichi:'몽치치',more:'모어',morning:'모닝',movie:'무비',much:'머치',music:'뮤직',my:'마이',
name:'네임',napkins:'냅킨즈',need:'니드',new:'뉴',next:'넥스트',nice:'나이스',night:'나이트',no:'노',not:'낫',now:'나우',"nurse's":'널시즈',
of:'어브',office:'오피스',oh:'오',okay:'오케이',on:'온',one:'원',open:'오픈',or:'오어',out:'아웃',outfit:'아웃핏',over:'오버',
pass:'패스',pencil:'펜슬',pet:'펫',phone:'폰',pizza:'피자',play:'플레이',played:'플레이드',playground:'플레이그라운드',please:'플리즈',pool:'풀',puppies:'퍼피즈',puppy:'퍼피',put:'풋',
reading:'리딩',ready:'레디',red:'레드',roblox:'로블록스',ruler:'룰러',run:'런',
sad:'새드',salt:'솔트',say:'세이',school:'스쿨',see:'씨',share:'쉐어',sing:'씽',sister:'시스터',sit:'씻',sleep:'슬립',sleepy:'슬리피',small:'스몰',snack:'스낵',so:'쏘',soccer:'싸커',soft:'소프트',some:'썸',spoon:'스푼',sticker:'스티커',stop:'스탑',sure:'슈어',
tag:'태그',take:'테이크',tell:'텔',ten:'텐',thank:'땡크',thanks:'땡스',"that's":'댓츠',the:'더',there:'데어',they:'데이',this:'디스',three:'쓰리',time:'타임',"time's":'타임즈',tired:'타이얼드',to:'투',today:'투데이',together:'투게더',tomorrow:'투머로우',too:'투',toothbrush:'투쓰브러쉬',toy:'토이',try:'트라이',turn:'턴',tv:'티비',twenty:'트웬티',two:'투',
understand:'언더스탠드',unicorns:'유니콘즈',up:'업',use:'유즈',
wait:'웨이트',wake:'웨이크',walk:'워크',want:'원트',watching:'워칭',water:'워터',we:'위',welcome:'웰컴',went:'웬트',what:'왓',"what's":'왓츠',where:'웨어',which:'위치',who:'후',why:'와이',will:'윌',win:'윈',with:'위드',wow:'와우',wrong:'롱',
yay:'예이',yellow:'옐로우',yes:'예스',you:'유',"you're":'유어',your:'유어',yummy:'야미',zoo:'주'
};
/* 영어 문장 → 한글 발음. 모르는 단어가 하나라도 있으면 ''(안 보여줌)을 돌려줘요. name 은 {EN→KO} 이름 짝 */
function pronOf(en,names){
 const miss=[];let out='';
 String(en).replace(/’/g,"'").replace(/([A-Za-z][A-Za-z'-]*)|([^A-Za-z]+)/g,(m,w,o)=>{
  if(!w){out+=o;return}
  const k=w.toLowerCase().replace(/^[-']+|[-']+$/g,'');
  if(names&&k in names){out+=names[k];return}
  if(PRON[k]){out+=PRON[k];return}
  if(k.includes('-')&&k.split('-').every(x=>PRON[x])){out+=k.split('-').map(x=>PRON[x]).join(' ');return}
  miss.push(w);out+=w;
 });
 return {text:out.trim(),miss};
}
