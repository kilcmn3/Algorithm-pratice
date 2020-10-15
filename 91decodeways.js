// https://leetcode.com/problems/decode-ways/

function numDecodings(s) {
  if (s == null || s.length === 0) return 0;
  if (s[0] === '0') return 0;

  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  console.log('what is dp: ', dp);
  for (let i = 2; i <= s.length; i++) {
    const a = Number(s.slice(i - 1, i)); // last one digit
    console.log('a in here: ', a);
    if (a >= 1 && a <= 9) {
      console.log('what is i :', i);
      console.log('what is dp[i]: ', dp[i]);
      dp[i] += dp[i - 1];
      console.log('second dp: ', dp);
    }

    const b = Number(s.slice(i - 2, i)); // last two digits
    if (b >= 10 && b <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  console.log('final dp: ', dp);
  return dp[s.length];
}

numDecodings('226');
