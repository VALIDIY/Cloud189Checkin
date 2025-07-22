module.exports = {
  corpId: process.env.WECOM_CORP_ID || '',      // 企业ID
  corpSecret: process.env.WECOM_SECRET || '',   // 应用密钥
  agentId: process.env.WECOM_AGENT_ID || '',    // 应用ID
  toUser: process.env.WECOM_TO_USER || '@all' // 接收成员ID
};
