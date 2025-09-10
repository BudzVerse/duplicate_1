(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9040], {
    28745:(e,t,a)=> {
        "use strict";
        a.r(t),a.d(t, {
            default:()=>N
        }
        );
        var n=a(95155),r=a(12115),s=a(53999),i=a(60760),o=a(96848),l=a(7828),p=a(47746),m=a(71789),d=a(69584),c=a(29911),y=a(38543);
        a(85716);
        let u=JSON.parse('{"R":[{"name":"Artificial Intelligence","endpoints":[{"name":"AI Logic","method":"POST","url":"https://api.itzky.xyz/ai/logic","parameters":[{"name":"prompt","type":"string","description":"The prompt for the AI"},{"name":"sessionId","type":"string","description":"Unique session ID"},{"name":"character","type":"string","description":"The character for the AI to assume"}],"headers":[{"name":"Authorization","value":"Bearer YOUR_API_KEY"},{"name":"Content-Type","value":"application/json"}],"exampleCode":"const axios = require(\\"axios\\");\\n\\nasync function ItzkyAI(prompt, sessionId, character) {\\n  const response = await axios.post(\'https://api.itzky.xyz/ai/logic\', {\\n    prompt,\\n    sessionId,\\n    character,\\n  }, {\\n    headers: {\\n      \'Authorization\': `Bearer ${apiKey}`,\\n      \'Content-Type\': \'application/json\',\\n    },\\n  });\\n  return response.data;\\n}\\n\\nconst result = await ItzkyAI(\'Explain the concept of AI.\', \'session-xyz123\', \'AI Assistant\');\\nconsole.log(result);","exampleJson":"{\\n  \\"status\\": 200,\\n  \\"creator\\": \\"Itzky - Muhammad Zaki\\",\\n  \\"result\\": {\\n    \\"sessionId\\": \\"session-xyz123\\",\\n    \\"answer\\": \\"Artificial Intelligence (AI) is a field of computer science focused on creating systems capable of performing tasks that typically require human intelligence, such as learning, problem-solving, and decision-making...\\"\\n  }\\n}"},{"name":"Meta AI","method":"POST","url":"https://api.itzky.xyz/ai/meta","parameters":[{"name":"character","type":"string","description":"The character for the AI to assume"},{"name":"prompt","type":"string","description":"The prompt for the AI"}],"headers":[{"name":"Authorization","value":"Bearer YOUR_API_KEY"},{"name":"Content-Type","value":"application/json"}],"exampleCode":"const axios = require(\\"axios\\");\\n\\nasync function MetaAI(character, prompt) {\\n  const response = await axios.post(\'https://api.itzky.xyz/ai/meta\', {\\n    character,\\n    prompt\\n  }, {\\n    headers: {\\n      \'Authorization\': `Bearer YOUR_API_KEY`,\\n      \'Content-Type\': \'application/json\',\\n    },\\n  });\\n  return response.data;\\n}\\n\\n(async () => {\\n  const result = await MetaAI(\'kamu adalah ItzkyAI\', \'hai\');\\n  console.log(result);\\n})();","exampleJson":"{\\n  \\"status\\": 200,\\n  \\"creator\\": \\"Itzky - Muhammad Zaki\\",\\n  \\"result\\": { \\"message\\": \\"Halo! Ada yang bisa saya bantu hari ini?\\" }\\n}"},{"name":"AI Anime Generator","method":"GET","url":"https://api.itzky.xyz/ai/animagine","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"prompt","type":"string","description":"The prompt for the generate anime image"}]},{"name":"Flux AI Image Generator","method":"GET","url":"https://api.itzky.xyz/ai/flux","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"prompt","type":"string","description":"Prompt to generate image shape with flux"}]},{"name":"Qwen AI","method":"POST","url":"https://api.itzky.xyz/ai/qwen","parameters":[{"name":"model","type":"string","description":"The model to use","options":["qwen-max-latest","qwen-plus-latest","qwen2.5-vl-72b-instruct","qwen2.5-14b-instruct-1m"]},{"name":"type","type":"string","description":"The type of AI processing","options":["t2t","search"]},{"name":"sessionId","type":"string","description":"Unique session ID"},{"name":"prompt","type":"string","description":"The prompt for the AI"},{"name":"character","type":"string","description":"The character for the AI to assume","optional":true}],"headers":[{"name":"Authorization","value":"Bearer YOUR_API_KEY"},{"name":"Content-Type","value":"application/json"}],"exampleCode":"const axios = require(\\"axios\\");\\n\\nasync function QwenAI(model, type, sessionId, prompt, character = \'\') {\\n  try {\\n    const response = await axios.post(\'https://api.itzky.xyz/ai/qwen\', {\\n      model,\\n      type,\\n      sessionId,\\n      prompt,\\n      character\\n    }, {\\n      headers: {\\n        \'Authorization\': `Bearer YOUR_API_KEY`,\\n        \'Content-Type\': \'application/json\',\\n      },\\n    });\\n    console.log(response.data);\\n  } catch (error) {\\n    console.error(error.response?.data || error.message);\\n  }\\n}\\n\\nQwenAI(\'qwen-max-latest\', \'t2t\', \'session-xyz123\', \'Explain AI.\', \'Assistant\');","exampleJson":"{\\n  \\"status\\": 200,\\n  \\"creator\\": \\"Itzky - Muhammad Zaki\\",\\n  \\"result\\": {\\n    \\"model\\": \\"qwen-max-latest\\",\\n    \\"type\\": \\"t2t\\",\\n    \\"session_id\\": \\"session-xyz123\\",\\n    \\"chat_id\\": \\"session-xyz123\\",\\n    \\"prompt\\": \\"Explain AI.\\",\\n    \\"character\\": \\"Assistant\\",\\n    \\"answer\\": \\"Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn.\\"\\n  }\\n}"},{"name":"AI Lyrics Music Generator","method":"GET","url":"https://api.itzky.xyz/ai/lyrics","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"prompt","type":"string","description":"Prompt to generate lyrics music"}]},{"name":"Dalle-3 Image Generator","method":"GET","url":"https://api.itzky.xyz/ai/dalle","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"prompt","type":"string","description":"Prompt to generate image shape with Dalle-3"}]},{"name":"Text to Speech","method":"GET","url":"https://api.itzky.xyz/ai/tts","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"text","type":"string","description":"The text to be converted to audio"}]},{"name":"Meta Llama","method":"GET","url":"https://api.itzky.xyz/ai/llama","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"model","type":"string","description":"The model to use","options":["meta-llama/Llama-3.3-70B-Instruct-Turbo","meta-llama/Meta-Llama-3.1-8B-Instruct","meta-llama/Llama-3.2-90B-Vision-Instruct","meta-llama/Meta-Llama-3.1-405B-Instruct"]},{"name":"prompt","type":"string","description":"The prompt for the AI"},{"name":"stream","type":"boolean","description":"Enable stream response (true/false)"}]},{"name":"DeepSeek AI","method":"GET","url":"https://api.itzky.xyz/ai/deepseek","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"model","type":"string","description":"The model to use","options":["deepseek-ai/DeepSeek-V3","deepseek-ai/DeepSeek-R1","deepseek-ai/DeepSeek-R1-Distill-Llama-70B","deepseek-ai/DeepSeek-R1-Distill-Qwen-32B"]},{"name":"prompt","type":"string","description":"The prompt for the AI"},{"name":"stream","type":"boolean","description":"Enable stream response (true/false)"}]},{"name":"Mixtral AI","method":"GET","url":"https://api.itzky.xyz/ai/mixtral","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"prompt","type":"string","description":"The prompt for the AI"},{"name":"stream","type":"boolean","description":"Enable stream response (true/false)"}]},{"name":"Microsoft Phi-4","method":"GET","url":"https://api.itzky.xyz/ai/microsoftphi4","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"prompt","type":"string","description":"The prompt for the AI"},{"name":"stream","type":"boolean","description":"Enable stream response (true/false)"}]},{"name":"Microsoft WizardLM2","method":"GET","url":"https://api.itzky.xyz/ai/microsoftwizardlm2","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"prompt","type":"string","description":"The prompt for the AI"},{"name":"stream","type":"boolean","description":"Enable stream response (true/false)"}]}]},{"name":"Downloader","endpoints":[{"name":"Spotify","method":"GET","url":"https://api.itzky.xyz/download/spotify","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The Spotify URL to download"}]},{"name":"Instagram","method":"GET","url":"https://api.itzky.xyz/download/instagram","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The Instagram URL to download"}]},{"name":"TikTok","method":"GET","url":"https://api.itzky.xyz/download/tiktok","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The TikTok URL to download"}]},{"name":"YouTube","method":"GET","url":"https://api.itzky.xyz/download/youtube","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The Youtube URL to download"}]},{"name":"Facebook","method":"GET","url":"https://api.itzky.xyz/download/facebook","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The Facebook URL to download"}]},{"name":"Twitter","method":"GET","url":"https://api.itzky.xyz/download/twitter","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The Twitter URL to download"}]},{"name":"CapCut","method":"GET","url":"https://api.itzky.xyz/download/capcut","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The CapCut URL to download"}]},{"name":"Bilibili","method":"GET","url":"https://api.itzky.xyz/download/bilibili","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The Bilibili URL to download"}]},{"name":"Google Drive","method":"GET","url":"https://api.itzky.xyz/download/gdrive","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The gdrive file URL to download"}]},{"name":"All in One (AIO)","method":"GET","url":"https://api.itzky.xyz/download/aio","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The media URL to download"}]}]},{"name":"Sokuja","endpoints":[{"name":"Latest","method":"GET","url":"https://api.itzky.xyz/sokuja/latest","parameters":[{"name":"apikey","type":"string","description":"Your API key"}]},{"name":"Search","method":"GET","url":"https://api.itzky.xyz/sokuja/search","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"query","type":"string","description":"Search query"}]},{"name":"Detail","method":"GET","url":"https://api.itzky.xyz/sokuja/detail","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"URL to get details"}]},{"name":"Episode","method":"GET","url":"https://api.itzky.xyz/sokuja/episode","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"Episode URL"}]}]},{"name":"Shinigami","endpoints":[{"name":"Latest","method":"GET","url":"https://api.itzky.xyz/shinigami/latest","parameters":[{"name":"apikey","type":"string","description":"Your API key"}]},{"name":"Search","method":"GET","url":"https://api.itzky.xyz/shinigami/search","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"query","type":"string","description":"Search query"}]},{"name":"Detail","method":"GET","url":"https://api.itzky.xyz/shinigami/detail","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"URL to get details"}]},{"name":"Episode","method":"GET","url":"https://api.itzky.xyz/shinigami/chapter","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"Episode URL"}]}]},{"name":"Tools","endpoints":[{"name":"Remini","method":"GET","url":"https://api.itzky.xyz/tools/remini","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The Image URL to Upgrade resolution"}]},{"name":"Convert Video To Audio","method":"GET","url":"https://api.itzky.xyz/tools/videotoaudio","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The Video URL to Convert"}]},{"name":"Convert Image to Prompt","method":"GET","url":"https://api.itzky.xyz/tools/imagetoprompt","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The Image URL to Convert"}]},{"name":"Check Porn in Media","method":"GET","url":"https://api.itzky.xyz/tools/cekporn","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The Image and Video URL to check"}]},{"name":"Remove Background","method":"GET","url":"https://api.itzky.xyz/tools/removebg","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The image URL to remove background"}]},{"name":"Whois Checker","method":"GET","url":"https://api.itzky.xyz/tools/whois","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The domain you want to check using whois"}]},{"name":"Detect AI Content","method":"GET","url":"https://api.itzky.xyz/tools/detectaicontent","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"text","type":"string","description":"The text to see whether the content is AI or not"}]},{"name":"Bypass AI Detection","method":"GET","url":"https://api.itzky.xyz/tools/bypassaidetection","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"text","type":"string","description":"The text that you want to rewrite to pass the AI detector"}]},{"name":"Translate Text","method":"GET","url":"https://api.itzky.xyz/tools/translate","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"text","type":"string","description":"The text that you want to translate into various languages"},{"name":"from","type":"string","description":"Text original language"},{"name":"to","type":"string","description":"The target language to translate"}]},{"name":"Language Detector","method":"GET","url":"https://api.itzky.xyz/tools/languagedetector","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"text","type":"string","description":"The text whose language you want to detect."}]},{"name":"Rewrite Text","method":"GET","url":"https://api.itzky.xyz/tools/rewrite","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"lang","type":"string","description":"Fill in the language used"},{"name":"text","type":"string","description":"The text you want to rewrite"}]},{"name":"Screenshot Website","method":"GET","url":"https://api.itzky.xyz/tools/ssweb","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"url","type":"string","description":"The URL of the website you want to visit"}]}]},{"name":"Search","endpoints":[{"name":"Tiktok Search","method":"GET","url":"https://api.itzky.xyz/search/tiktok","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"query","type":"string","description":"keywords to search on Tiktok"}]},{"name":"Spotify Search Song","method":"GET","url":"https://api.itzky.xyz/search/spotify","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"query","type":"string","description":"keywords to search on tiktok Spotify"}]},{"name":"Pinterest Search Image","method":"GET","url":"https://api.itzky.xyz/search/pinterest","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"query","type":"string","description":"keywords to search on Pinterest"}]},{"name":"Bstation Id Search","method":"GET","url":"https://api.itzky.xyz/search/bstation","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"query","type":"string","description":"keywords to search on Bstation"}]},{"name":"KBBI Search","method":"GET","url":"https://api.itzky.xyz/search/kbbi","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"query","type":"string","description":"Send the word you want to search for in KBBI"}]}]},{"name":"Islami Feature","endpoints":[{"name":"Jadwal Sholat","method":"GET","url":"https://api.itzky.xyz/islamic/jadwalsholat","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"id","type":"string","description":"id area prayer schedule, special (Indonesia)"}]}]},{"name":"Canvas Feature","endpoints":[{"name":"Tweets Post","method":"POST","url":"https://api.itzky.xyz/canvas/tweet","parameters":[{"name":"displayName","type":"string","description":"The name displayed on the tweet (e.g., user\'s full name)"},{"name":"username","type":"string","description":"The user\'s handle (without @, e.g., username)"},{"name":"avatar","type":"string","description":"URL of the user\'s profile picture"},{"name":"text","type":"string","description":"The tweet text content"},{"name":"replies","type":"number","description":"The number of replies to the tweet (optional, defaults to 0)"},{"name":"retweets","type":"number","description":"The number of retweets of the tweet (optional, defaults to 0)"},{"name":"theme","type":"string","description":"Theme for the tweet design (either \'light\' or \'dark\', defaults to \'dark\')"}],"headers":[{"name":"Authorization","value":"Bearer YOUR_API_KEY"},{"name":"Content-Type","value":"application/json"}],"exampleCode":"const axios = require(\'axios\');\\n\\nasync function tweets() {\\n    const url = \'https://api.itzky.xyz/canvas/tweet\';\\n    const headers = {\\n        Authorization: \'Bearer YOUR_APIKEY\',\\n        \'Content-Type\': \'application/json\'\\n    };\\n    const data = {\\n        displayName: \\"Itzky API\\",\\n        username: \\"itzky\\",\\n        avatar: \\"https://cdn.itzky.xyz/uploads/Y2FA8vQmVz.jpg\\",\\n        text: \\"This is a sample tweet from Itzky API.\\",\\n        replies: 10,\\n        retweets: 20,\\n        theme: \\"light\\"\\n    };\\n\\n    try {\\n        const response = await axios.post(url, data, { headers });\\n        return response.data;\\n    } catch (error) {\\n        console.error(error.response ? error.response.data : error.message);\\n    }\\n}","exampleJson":"{\\n  \\"status\\": 200,\\n  \\"creator\\": \\"Itzky - Muhammad Zaki\\",\\n  \\"result\\": \\"https://cdn.itzky.us.kg/file/GDdeIYFH6W.png\\"\\n}"},{"name":"Carbonify","method":"GET","url":"https://api.itzky.xyz/canvas/carbon","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"code","type":"string","description":"The code snippet to be transformed into an image"}]},{"name":"Welcome Banner","method":"POST","url":"https://api.itzky.xyz/canvas/welcome","parameters":[{"name":"username","type":"string","description":"The name of the user joining"},{"name":"community","type":"string","description":"The community or group name"},{"name":"profileUrl","type":"string","description":"URL of the user\'s profile picture","optional":true},{"name":"totalMembers","type":"number","description":"Total members in the group"},{"name":"isDarkTheme","type":"boolean","description":"Use dark theme","options":["true","false"]}],"headers":[{"name":"Authorization","value":"Bearer YOUR_API_KEY"},{"name":"Content-Type","value":"application/json"}],"exampleCode":"const axios = require(\\"axios\\");\\n\\nasync function welcome(username, totalMembers) {\\n  const response = await axios.post(\'https://api.itzky.xyz/canvas/welcome\', {\\n    username,\\n    community: \\"ElxyzGPT Official\\",\\n    profileUrl: \\"https://cdn.itzky.xyz/uploads/Y2FA8vQmVz.jpg\\",\\n    totalMembers,\\n    isDarkTheme: true\\n  }, {\\n    headers: {\\n      \'Authorization\': \'Bearer YOUR_API_KEY\',\\n      \'Content-Type\': \'application/json\'\\n    },\\n  });\\n  return response.data;\\n}\\n\\n(async () => {\\n  const result = await welcome(\\"Zaki\\", 1500);\\n  console.log(result);\\n})();","exampleJson":"{\\n  \\"success\\": true,\\n  \\"status\\": 200,\\n  \\"creator\\": \\"Itzky - Muhammad Zaki\\",\\n  \\"result\\": {\\n    \\"url\\": \\"https://cdn.itzky.xyz/file/s6aWFC45WZ.png\\"\\n  }\\n}"},{"name":"Goodbye Banner","method":"POST","url":"https://api.itzky.xyz/canvas/goodbye","parameters":[{"name":"username","type":"string","description":"The name of the user joining"},{"name":"community","type":"string","description":"The community or group name"},{"name":"profileUrl","type":"string","description":"URL of the user\'s profile picture","optional":true},{"name":"totalMembers","type":"number","description":"Total members in the group"},{"name":"isDarkTheme","type":"boolean","description":"Use dark theme","options":["true","false"]}],"headers":[{"name":"Authorization","value":"Bearer YOUR_API_KEY"},{"name":"Content-Type","value":"application/json"}],"exampleCode":"const axios = require(\\"axios\\");\\n\\nasync function welcome(username, totalMembers) {\\n  const response = await axios.post(\'https://api.itzky.xyz/canvas/goodbye\', {\\n    username,\\n    community: \\"ElxyzGPT Official\\",\\n    profileUrl: \\"https://cdn.itzky.xyz/uploads/Y2FA8vQmVz.jpg\\",\\n    totalMembers,\\n    isDarkTheme: true\\n  }, {\\n    headers: {\\n      \'Authorization\': \'Bearer YOUR_API_KEY\',\\n      \'Content-Type\': \'application/json\'\\n    },\\n  });\\n  return response.data;\\n}\\n\\n(async () => {\\n  const result = await welcome(\\"Zaki\\", 1500);\\n  console.log(result);\\n})();","exampleJson":"{\\n  \\"success\\": true,\\n  \\"status\\": 200,\\n  \\"creator\\": \\"Itzky - Muhammad Zaki\\",\\n  \\"result\\": {\\n    \\"url\\": \\"https://cdn.itzky.xyz/file/s6aWFC45WZ.png\\"\\n  }\\n}"}]},{"name":"Payment Gateway","endpoints":[{"name":"OrderKuota create QRIS","method":"GET","url":"https://api.itzky.xyz/orkut/createqris","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"amount","type":"number","description":"The amount for the QRIS payment"},{"name":"codeqr","type":"string","description":"The QR code for the payment"}]},{"name":"OrderKuota Check Status","method":"GET","url":"https://api.itzky.xyz/orkut/checkstatus","parameters":[{"name":"apikey","type":"string","description":"Your API key"},{"name":"merchant","type":"string","description":"The merchant code from Okeconnect"},{"name":"token","type":"string","description":"The API key from Okeconnect"}]}]}]}');
        var h=a(97168),g=a(89852),x=a(39963),k=a(66474),f=a(47863),b=a(5196);
        let w=x.bL;
        x.YJ;
        let z=x.WT,T=r.forwardRef((e,t)=> {
            let {
                className:a,children:r,...i
            }
            =e;
            return(0,n.jsxs)(x.l9, {
                ref:t,className:(0,s.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...i,children:[r,(0,n.jsx)(x.In, {
                    asChild:!0,children:(0,n.jsx)(k.A, {
                        className:"h-4 w-4 opacity-50"
                    }
                    )
                }
                )]
            }
            )
        }
        );
        T.displayName=x.l9.displayName;
        let j=r.forwardRef((e,t)=> {
            let {
                className:a,...r
            }
            =e;
            return(0,n.jsx)(x.PP, {
                ref:t,className:(0,s.cn)("flex cursor-default items-center justify-center py-1",a),...r,children:(0,n.jsx)(f.A, {
                    className:"h-4 w-4"
                }
                )
            }
            )
        }
        );
        j.displayName=x.PP.displayName;
        let A=r.forwardRef((e,t)=> {
            let {
                className:a,...r
            }
            =e;
            return(0,n.jsx)(x.wn, {
                ref:t,className:(0,s.cn)("flex cursor-default items-center justify-center py-1",a),...r,children:(0,n.jsx)(k.A, {
                    className:"h-4 w-4"
                }
                )
            }
            )
        }
        );
        A.displayName=x.wn.displayName;
        let I=r.forwardRef((e,t)=> {
            let {
                className:a,children:r,position:i="popper",...o
            }
            =e;
            return(0,n.jsx)(x.ZL, {
                children:(0,n.jsxs)(x.UC, {
                    ref:t,className:(0,s.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:i,...o,children:[(0,n.jsx)(j, {

                    }
                    ),(0,n.jsx)(x.LM, {
                        className:(0,s.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r
                    }
                    ),(0,n.jsx)(A, {

                    }
                    )]
                }
                )
            }
            )
        }
        );
        I.displayName=x.UC.displayName,r.forwardRef((e,t)=> {
            let {
                className:a,...r
            }
            =e;
            return(0,n.jsx)(x.JU, {
                ref:t,className:(0,s.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",a),...r
            }
            )
        }
        ).displayName=x.JU.displayName;
        let v=r.forwardRef((e,t)=> {
            let {
                className:a,children:r,...i
            }
            =e;
            return(0,n.jsxs)(x.q7, {
                ref:t,className:(0,s.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...i,children:[(0,n.jsx)("span", {
                    className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(x.VF, {
                        children:(0,n.jsx)(b.A, {
                            className:"h-4 w-4"
                        }
                        )
                    }
                    )
                }
                ),(0,n.jsx)(x.p4, {
                    children:r
                }
                )]
            }
            )
        }
        );
        v.displayName=x.q7.displayName,r.forwardRef((e,t)=> {
            let {
                className:a,...r
            }
            =e;
            return(0,n.jsx)(x.wv, {
                ref:t,className:(0,s.cn)("-mx-1 my-1 h-px bg-muted",a),...r
            }
            )
        }
        ).displayName=x.wv.displayName;
        let N=()=> {
            var e;
            let[t,a]=(0,r.useState)(null),[x,k]=(0,r.useState)(null),[f,b]=(0,r.useState)(!0),[j,A]=(0,r.useState)( {

            }
            ),[N,E]=(0,r.useState)(null),[P,C]=(0,r.useState)("try"),[Y,S]=(0,r.useState)(!1),[G,R]=(0,r.useState)(""),U=(0,r.useRef)(null),[B,L]=(0,r.useState)(!1),[O,F]=(0,r.useState)( {

            }
            );
            (0,r.useEffect)(()=> {
                let e=setTimeout(()=> {
                    b(!1)
                }
                ,1e3),t=()=> {
                    L(window.pageYOffset>300)
                }
                ;
                return window.addEventListener("scroll",t),()=> {
                    clearTimeout(e),window.removeEventListener("scroll",t)
                }

            }
            ,[]);
            let q=async e=> {
                S(!0),E(null);
                try {
                    let a,n= {
                        "Content-Type":"application/json"
                    }
                    ,r=e.url;
                    if("GET"===e.method) {
                        let t=new URLSearchParams(j[e.name]);
                        r+="?".concat(t.toString())
                    }
                    else if("POST"===e.method) {
                        var t;
                        a=JSON.stringify(j[e.name]),(null==(t=j[e.name])?void 0:t.apiKey)&&(n.Authorization="Bearer ".concat(j[e.name].apiKey))
                    }
                    let s=await fetch(r, {
                        method:e.method,headers:n,body:"POST"===e.method?a:void 0
                    }
                    ),i=await s.json();
                    E(i)
                }
                catch(e) {
                    console.error("Error:",e),E( {
                        error:"An error occurred while processing your request."
                    }
                    )
                }
                S(!1)
            }
            ,D=u.R.map(e=>( {
                ...e,endpoints:e.endpoints.filter(t=>t.name.toLowerCase().includes(G.toLowerCase())||e.name.toLowerCase().includes(G.toLowerCase()))
            }
            )).filter(e=>e.endpoints.length>0),_=e=> {
                U.current&&U.current.scrollBy( {
                    left:"left"===e?-200:200,behavior:"smooth"
                }
                )
            }
            ,M=e=> {
                a(t===e?null:e),k(null),F( {

                }
                ),t!==e&&setTimeout(()=> {
                    let t=document.getElementById("category-".concat(e));
                    if(t) {
                        let e=t.getBoundingClientRect().top+window.pageYOffset-100;
                        window.scrollTo( {
                            top:e,behavior:"smooth"
                        }
                        )
                    }

                }
                ,100)
            }
            ,K=e=> {
                k(x===e?null:e),A(t=>( {
                    ...t,[e]: {

                    }

                }
                )),F(t=>( {
                    ...t,[e]:!1
                }
                )),E(null)
            }
            ,J=e=> {
                F(t=> {
                    let a= {
                        ...t,[e]:!t[e]
                    }
                    ;
                    return a[e]||E(null),a
                }
                )
            }
            ;
            return f?(0,n.jsx)("div", {
                className:"min-h-screen flex items-center justify-center",children:(0,n.jsx)(m.k, {

                }
                )
            }
            ):(0,n.jsxs)("div", {
                className:"min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white",children:[(0,n.jsx)(l.Navbar, {

                }
                ),(0,n.jsxs)("main", {
                    className:"flex-grow container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-12 pt-20",children:[(0,n.jsx)("div", {
                        className:"mb-6",children:(0,n.jsxs)("div", {
                            className:"relative",children:[(0,n.jsx)(g.p, {
                                type:"text",placeholder:"Search APIs...",value:G,onChange:e=>R(e.target.value),className:(0,s.cn)("w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700","focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900")
                            }
                            ),(0,n.jsx)(c.KSO, {
                                className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                            }
                            )]
                        }
                        )
                    }
                    ),(0,n.jsxs)("div", {
                        className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[(0,n.jsxs)("div", {
                            className:"col-span-1",children:[(0,n.jsxs)("div", {
                                className:"bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6",children:[(0,n.jsx)("h2", {
                                    className:"text-xl font-semibold mb-4 text-black dark:text-white",children:"Categories"
                                }
                                ),(0,n.jsx)("ul", {
                                    className:"space-y-2",children:D.map(e=>(0,n.jsx)("li", {
                                        children:(0,n.jsx)("button", {
                                            onClick:()=>M(e.name),className:"w-full text-left px-4 py-2 rounded-xl transition-colors duration-200 ".concat(t===e.name?"bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-400":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:(0,n.jsxs)("div", {
                                                className:"flex items-center justify-between",children:[(0,n.jsx)("span", {
                                                    children:e.name
                                                }
                                                ),(0,n.jsxs)("div", {
                                                    className:"flex items-center",children:[(0,n.jsx)("span", {
                                                        className:"text-xs font-semibold mr-1 ".concat(t===e.name?"text-sky-600 dark:text-sky-400":"text-gray-700 dark:text-gray-300"),children:e.endpoints.length
                                                    }
                                                    ),(0,n.jsx)(c.Vr3, {
                                                        className:"transform transition-transform duration-200 ".concat(t===e.name?"rotate-180":"")
                                                    }
                                                    )]
                                                }
                                                )]
                                            }
                                            )
                                        }
                                        )
                                    }
                                    ,e.name))
                                }
                                )]
                            }
                            ),(0,n.jsxs)("div", {
                                className:"mt-8 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6",children:[(0,n.jsx)("h3", {
                                    className:"text-lg font-semibold mb-4 text-black dark:text-white",children:"Get API Key"
                                }
                                ),(0,n.jsx)("p", {
                                    className:"mb-4 text-gray-600 dark:text-gray-400",children:"To get your API key, contact our WhatsApp bot:"
                                }
                                ),(0,n.jsx)(h.$, {
                                    asChild:!0,className:"bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl inline-flex items-center transition-colors duration-200",children:(0,n.jsxs)("a", {
                                        href:"https://wa.me/6283877118785?text=.regisapi",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(c.EcP, {
                                            className:"mr-2"
                                        }
                                        ),"Contact WhatsApp Bot"]
                                    }
                                    )
                                }
                                )]
                            }
                            )]
                        }
                        ),(0,n.jsx)("div", {
                            className:"col-span-3",children:(0,n.jsx)(i.N, {
                                mode:"wait",children:t&&(0,n.jsxs)(o.P.div, {
                                    initial: {
                                        opacity:0,y:20
                                    }
                                    ,animate: {
                                        opacity:1,y:0
                                    }
                                    ,exit: {
                                        opacity:0,y:-20
                                    }
                                    ,transition: {
                                        duration:.3
                                    }
                                    ,className:"bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6",id:"category-".concat(t),children:[(0,n.jsxs)("h2", {
                                        className:"text-xl font-semibold mb-6 text-black dark:text-white",children:[t," Endpoints"]
                                    }
                                    ),null==(e=D.find(e=>e.name===t))?void 0:e.endpoints.map(e=>(0,n.jsxs)("div", {
                                        className:"mb-6",children:[(0,n.jsx)("div", {
                                            className:"p-4 rounded cursor-pointer transition-colors duration-200 ".concat("GET"===e.method?"bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700":"bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700"),onClick:()=>K(e.name),children:(0,n.jsxs)("div", {
                                                className:"flex items-center justify-between",children:[(0,n.jsxs)("span", {
                                                    className:"font-semibold text-black dark:text-white",children:[(0,n.jsx)("span", {
                                                        className:"inline-block px-2 py-1 mr-2 rounded text-xs font-medium ".concat("GET"===e.method?"bg-blue-500 text-white":"bg-green-500 text-white"),children:e.method
                                                    }
                                                    ),e.name]
                                                }
                                                ),(0,n.jsx)(c.Vr3, {
                                                    className:"transform transition-transform duration-200 text-black dark:text-white ".concat(x===e.name?"rotate-180":"")
                                                }
                                                )]
                                            }
                                            )
                                        }
                                        ),(0,n.jsx)(i.N, {
                                            children:x===e.name&&(0,n.jsxs)(o.P.div, {
                                                initial: {
                                                    opacity:0,height:0
                                                }
                                                ,animate: {
                                                    opacity:1,height:"auto"
                                                }
                                                ,exit: {
                                                    opacity:0,height:0
                                                }
                                                ,transition: {
                                                    duration:.3
                                                }
                                                ,className:"bg-white dark:bg-gray-700 p-4 rounded-b-xl mt-2",children:[(0,n.jsxs)("div", {
                                                    className:"flex items-center mb-4 overflow-x-auto relative",children:[(0,n.jsx)("button", {
                                                        onClick:()=>_("left"),className:"absolute left-0 z-10 bg-gray-200 dark:bg-gray-600 text-black dark:text-white p-2 rounded-l-xl",children:(0,n.jsx)(c._Jj, {

                                                        }
                                                        )
                                                    }
                                                    ),(0,n.jsxs)("div", {
                                                        ref:U,className:"flex space-x-2 overflow-x-auto scrollbar-hide mx-8",children:[(0,n.jsx)(h.$, {
                                                            variant:"try"===P?"default":"secondary",onClick:()=>C("try"),className:"whitespace-nowrap",children:"Try it out"
                                                        }
                                                        ),(0,n.jsx)(h.$, {
                                                            variant:"code"===P?"default":"secondary",onClick:()=>C("code"),className:"whitespace-nowrap",children:"Example Code"
                                                        }
                                                        ),(0,n.jsx)(h.$, {
                                                            variant:"result"===P?"default":"secondary",onClick:()=>C("result"),className:"whitespace-nowrap",children:"Example Result"
                                                        }
                                                        )]
                                                    }
                                                    ),(0,n.jsx)("button", {
                                                        onClick:()=>_("right"),className:"absolute right-0 z-10 bg-gray-200 dark:bg-gray-600 text-black dark:text-white p-2 rounded-r-xl",children:(0,n.jsx)(c.X6T, {

                                                        }
                                                        )
                                                    }
                                                    )]
                                                }
                                                ),"code"===P&&(0,n.jsx)("div", {
                                                    className:"mb-4",children:(0,n.jsx)(d.N, {
                                                        code:e.exampleCode,language:"javascript"
                                                    }
                                                    )
                                                }
                                                ),"result"===P&&(0,n.jsx)("div", {
                                                    className:"mb-4",children:(0,n.jsx)(d.N, {
                                                        code:e.exampleJson,language:"json"
                                                    }
                                                    )
                                                }
                                                ),"try"===P&&(0,n.jsxs)("div", {
                                                    className:"mb-4",children:[(0,n.jsxs)("div", {
                                                        className:"flex items-center justify-between mb-2",children:[(0,n.jsx)("strong", {
                                                            className:"text-black dark:text-white",children:"URL:"
                                                        }
                                                        ),(0,n.jsx)(h.$, {
                                                            variant:"outline",size:"sm",onClick:()=>J(e.name),className:"ml-2",children:O[e.name]?"Cancel":"Try Out"
                                                        }
                                                        )]
                                                    }
                                                    ),(0,n.jsx)("div", {
                                                        className:"overflow-x-auto",children:(0,n.jsx)("p", {
                                                            className:"text-gray-600 dark:text-gray-400 mb-4 whitespace-nowrap",children:e.url
                                                        }
                                                        )
                                                    }
                                                    ),(0,n.jsx)("h4", {
                                                        className:"text-lg font-semibold text-black dark:text-white mb-2 mt-4",children:"Parameters:"
                                                    }
                                                    ),(0,n.jsx)("ul", {
                                                        className:"list-disc pl-5 mb-4",children:e.parameters.map((t,a)=> {
                                                            var r,s;
                                                            return(0,n.jsxs)("li", {
                                                                className:"text-gray-600 dark:text-gray-400 mb-2",children:[(0,n.jsx)("strong", {
                                                                    children:t.name
                                                                }
                                                                )," (",t.type,"): ",t.description,(0,n.jsx)("div", {
                                                                    className:"mt-2",children:t.options?(0,n.jsxs)(w, {
                                                                        onValueChange:a=>A(n=>( {
                                                                            ...n,[e.name]: {
                                                                                ...n[e.name],[t.name]:a
                                                                            }

                                                                        }
                                                                        )),value:(null==(r=j[e.name])?void 0:r[t.name])||"",children:[(0,n.jsx)(T, {
                                                                            className:"w-full",children:(0,n.jsx)(z, {
                                                                                placeholder:"Select ".concat(t.name)
                                                                            }
                                                                            )
                                                                        }
                                                                        ),(0,n.jsx)(I, {
                                                                            children:t.options.map(e=>(0,n.jsx)(v, {
                                                                                value:e,children:e
                                                                            }
                                                                            ,e))
                                                                        }
                                                                        )]
                                                                    }
                                                                    ):O[e.name]&&(0,n.jsx)(g.p, {
                                                                        type:"text",placeholder:"Enter ".concat(t.name),className:"w-full p-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded",onChange:a=>A(n=>( {
                                                                            ...n,[e.name]: {
                                                                                ...n[e.name],[t.name]:a.target.value
                                                                            }

                                                                        }
                                                                        )),value:(null==(s=j[e.name])?void 0:s[t.name])||""
                                                                    }
                                                                    )
                                                                }
                                                                )]
                                                            }
                                                            ,a)
                                                        }
                                                        )
                                                    }
                                                    ),"POST"===e.method&&(0,n.jsxs)(n.Fragment, {
                                                        children:[(0,n.jsx)("h4", {
                                                            className:"text-lg font-semibold text-black dark:text-white mb-2",children:"Headers:"
                                                        }
                                                        ),(0,n.jsx)("ul", {
                                                            className:"list-disc pl-5 mb-4",children:e.headers.map((t,a)=> {
                                                                var r;
                                                                return(0,n.jsxs)("li", {
                                                                    className:"text-gray-600 dark:text-gray-400",children:[(0,n.jsx)("strong", {
                                                                        children:t.name
                                                                    }
                                                                    ),": ",t.value,"Authorization"===t.name&&O[e.name]&&(0,n.jsx)(g.p, {
                                                                        type:"text",placeholder:"Enter API Key",className:"mt-1 w-full p-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded",onChange:t=>A(a=>( {
                                                                            ...a,[e.name]: {
                                                                                ...a[e.name],apiKey:t.target.value
                                                                            }

                                                                        }
                                                                        )),value:(null==(r=j[e.name])?void 0:r.apiKey)||""
                                                                    }
                                                                    )]
                                                                }
                                                                ,a)
                                                            }
                                                            )
                                                        }
                                                        )]
                                                    }
                                                    ),O[e.name]&&(0,n.jsx)("div", {
                                                        className:"mt-4 flex justify-end",children:(0,n.jsx)(h.$, {
                                                            onClick:()=>q(e),className:"bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-xl flex items-center justify-center transition-colors duration-200",disabled:Y,children:"Execute"
                                                        }
                                                        )
                                                    }
                                                    ),Y&&(0,n.jsxs)("div", {
                                                        className:"mt-4 text-center",children:[(0,n.jsx)(m.k, {

                                                        }
                                                        ),(0,n.jsx)("p", {
                                                            className:"text-black dark:text-white mt-2",children:"Processing request..."
                                                        }
                                                        )]
                                                    }
                                                    ),N&&(0,n.jsxs)("div", {
                                                        className:"mt-4",children:[(0,n.jsx)("h4", {
                                                            className:"text-lg font-semibold text-black dark:text-white mb-2",children:"Result:"
                                                        }
                                                        ),(0,n.jsx)(d.N, {
                                                            code:JSON.stringify(N,null,2),language:"json"
                                                        }
                                                        )]
                                                    }
                                                    )]
                                                }
                                                )]
                                            }
                                            )
                                        }
                                        )]
                                    }
                                    ,e.name))]
                                }
                                ,t)
                            }
                            )
                        }
                        )]
                    }
                    )]
                }
                ),(0,n.jsx)(p.Footer, {

                }
                ),(0,n.jsx)(y.N9, {
                    position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark",style: {
                        fontSize:"14px",width:"300px"
                    }

                }
                ),B&&(0,n.jsx)(o.P.button, {
                    initial: {
                        opacity:0
                    }
                    ,animate: {
                        opacity:1
                    }
                    ,exit: {
                        opacity:0
                    }
                    ,className:"fixed bottom-8 right-8 bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full shadow-lg",onClick:()=> {
                        window.scrollTo( {
                            top:0,behavior:"smooth"
                        }
                        ),a(null),k(null)
                    }
                    ,children:(0,n.jsx)(c.uCC, {

                    }
                    )
                }
                )]
            }
            )
        }

    }
    ,69584:(e,t,a)=> {
        "use strict";
        a.d(t, {
            N:()=>m
        }
        );
        var n=a(95155),r=a(12115),s=a(5196),i=a(24357),o=a(97168),l=a(58497);
        let p= {
            'code[class*="language-"]': {
                color:"#c3cee3",background:"#1E2030",fontFamily:"'JetBrains Mono', monospace",fontWeight:"bold",fontSize:"14px",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",tabSize:4,hyphens:"none"
            }
            ,'pre[class*="language-"]': {
                color:"#c3cee3",background:"#1E2030",fontFamily:"'JetBrains Mono', monospace",fontWeight:"bold",fontSize:"14px",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",tabSize:4,hyphens:"none",margin:0,padding:"1rem",overflow:"auto"
            }
            ,':not(pre) > code[class*="language-"]': {
                background:"#1E2030",padding:".1em",borderRadius:".3em",whiteSpace:"normal"
            }
            ,comment: {
                color:"#676E95",fontStyle:"italic"
            }
            ,"block-comment": {
                color:"#676E95",fontStyle:"italic"
            }
            ,prolog: {
                color:"#676E95"
            }
            ,doctype: {
                color:"#676E95"
            }
            ,cdata: {
                color:"#676E95"
            }
            ,punctuation: {
                color:"#89DDFF"
            }
            ,tag: {
                color:"#f07178"
            }
            ,"attr-name": {
                color:"#C792EA"
            }
            ,namespace: {
                color:"#F07178"
            }
            ,deleted: {
                color:"#F07178"
            }
            ,"function-name": {
                color:"#82AAFF"
            }
            ,boolean: {
                color:"#C792EA"
            }
            ,number: {
                color:"#F78C6C"
            }
            ,function: {
                color:"#82AAFF"
            }
            ,property: {
                color:"#C792EA"
            }
            ,"class-name": {
                color:"#FFCB6B"
            }
            ,constant: {
                color:"#C792EA"
            }
            ,symbol: {
                color:"#C792EA"
            }
            ,selector: {
                color:"#C792EA"
            }
            ,important: {
                color:"#C792EA",fontWeight:"bold"
            }
            ,atrule: {
                color:"#C792EA"
            }
            ,keyword: {
                color:"#C792EA"
            }
            ,builtin: {
                color:"#FFCB6B"
            }
            ,string: {
                color:"#C3E88D"
            }
            ,char: {
                color:"#C3E88D"
            }
            ,"attr-value": {
                color:"#C3E88D"
            }
            ,regex: {
                color:"#89DDFF"
            }
            ,variable: {
                color:"#F07178"
            }
            ,operator: {
                color:"#89DDFF"
            }
            ,entity: {
                color:"#FFCB6B"
            }
            ,url: {
                color:"#80CBC4"
            }

        }
        ;
        function m(e) {
            let {
                code:t,language:a
            }
            =e,[m,d]=(0,r.useState)(!1);
            return(0,n.jsx)("div", {
                className:"relative",children:(0,n.jsxs)("div", {
                    className:"rounded-lg overflow-hidden",children:[(0,n.jsxs)("div", {
                        className:"flex items-center justify-between px-4 py-2 bg-[#1E2030] text-white",children:[(0,n.jsxs)("div", {
                            className:"flex items-center gap-2",children:[(0,n.jsx)("div", {
                                className:"w-3 h-3 rounded-full bg-[#ff5f56]"
                            }
                            ),(0,n.jsx)("div", {
                                className:"w-3 h-3 rounded-full bg-[#ffbd2e]"
                            }
                            ),(0,n.jsx)("div", {
                                className:"w-3 h-3 rounded-full bg-[#27c93f]"
                            }
                            )]
                        }
                        ),(0,n.jsx)("span", {
                            className:"text-sm font-mono",style: {
                                fontFamily:"Blood, monospace"
                            }
                            ,children:a
                        }
                        ),(0,n.jsx)(o.$, {
                            variant:"ghost",size:"icon",className:"h-8 w-8 text-white hover:text-white hover:bg-white/20",onClick:()=> {
                                navigator.clipboard.writeText(t),d(!0),setTimeout(()=>d(!1),2e3)
                            }
                            ,children:m?(0,n.jsx)(s.A, {
                                className:"h-4 w-4"
                            }
                            ):(0,n.jsx)(i.A, {
                                className:"h-4 w-4"
                            }
                            )
                        }
                        )]
                    }
                    ),(0,n.jsx)(l.A, {
                        language:a,style:p,customStyle: {
                            margin:0,background:"#1E2030",padding:"1rem"
                        }
                        ,children:t
                    }
                    )]
                }
                )
            }
            )
        }

    }
    ,71789:(e,t,a)=> {
        "use strict";
        a.d(t, {
            k:()=>s
        }
        );
        var n=a(95155),r=a(53999);
        function s(e) {
            let {
                className:t
            }
            =e;
            return(0,n.jsx)("div", {
                className:(0,r.cn)("flex items-center justify-center",t),children:(0,n.jsx)("div", {
                    className:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"
                }
                )
            }
            )
        }

    }
    ,88771:(e,t,a)=> {
        Promise.resolve().then(a.bind(a,28745))
    }
    ,89852:(e,t,a)=> {
        "use strict";
        a.d(t, {
            p:()=>i
        }
        );
        var n=a(95155),r=a(12115),s=a(53999);
        let i=r.forwardRef((e,t)=> {
            let {
                className:a,type:r,...i
            }
            =e;
            return(0,n.jsx)("input", {
                type:r,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...i
            }
            )
        }
        );
        i.displayName="Input"
    }

}
,e=> {
    var t=t=>e(e.s=t);
    e.O(0,[4797,6711,9003,605,3214,1183,2315,8441,1684,7358],()=>t(88771)),_N_E=e.O()
}
]);
