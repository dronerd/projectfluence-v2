"use client";

import React, { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ExtraPage() {
  const scrollToTop = useCallback((e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault?.();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // --- Copyable prompt helper component ---
  function CopyablePrompt({ label, text }: { label?: string; text: string }) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
      // primary: navigator.clipboard
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      } catch (err) {
        // log the error so it's not an unused-variable lint warning, then fallback for older browsers
        console.error("Clipboard write failed:", err);
        try {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          ta.remove();
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch (innerErr) {
          // log inner error and show alert
          console.error("Fallback copy failed:", innerErr);
          alert("コピーに失敗しました。テキストを手動で選択してください。");
        }
      }
    }

    return (
      <div className="bg-white border rounded-lg p-3 shadow-sm flex flex-col md:flex-row gap-3 items-start md:items-center">
        <div className="flex-1 min-w-0">
          {label && <div className="text-sm text-gray-500 mb-1">{label}</div>}
          <pre className="whitespace-pre-wrap break-words text-sm text-gray-900 p-2 bg-neutral-100 rounded-md max-h-48 overflow-auto">{text}</pre>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3 py-2 text-sm font-medium rounded-full border shadow-sm hover:brightness-95 focus:outline-none"
            aria-label={`Copy prompt${label ? `: ${label}` : ""}`}>
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    );
  }

  // --- The prompts to show / copy ---
  const prompts = [
    {
      label: "英会話の練習用",
      text:
        `Hi, I want to practice speaking English. Please ask me some questions in the subject of (everyday life/ university studies/ future plans…etc). After I answer, give me feedback and then ask another question. Use words I know, but sometimes a few harder ones so I can learn. My English level is (A1/A2/B1/B2/C1/C2).`
    },
    {
      label: "英検対策（例：１級の面接）",
      text:
        `I would like to prepare for the Eiken grade 1 Speaking section. Could you please present me with a topic that is relevant to Eiken grade 1? Then I will try to give a presentation on this topic. Afterwards, you could correct my presentation and show me how I could improve it. It would also be helpful if you could later ask me a few questions about my presentation.`
    },
    {
      label: "TOEFLライティングの練習",
      text:
        `Can you give me an example of a typical writing task given in the TOEFL iBT writing part (1/2)? I will type in my answer, so please fix grammatical mistakes, and teach me how I can further improve my vocabulary use.`
    },
    {
      label: "自由ライティングの添削",
      text: `Can you revise this text for me? / Can you improve this text for me?`
    },
    {
      label: "学んだ表現のリスト化",
      text: `Can you create a list of vocabularies and phrases you taught me today that might be useful in the future?`
    }
  ];

  return (
    <>
      {/* Sticky Banner (same as before) */}
      <div className="fixed top-0 left-0 w-full bg-blue-600 text-white py-7 z-50 shadow-md">
        <div className="max-w-[880px] sm:max-w-3xl md:max-w-7xl mx-auto px-4 sm:px-7 relative flex items-center">
          <div className="absolute left-4 flex items-center z-50">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center gap-3 focus:outline-none transform transition-transform duration-200 active:scale-105"
            >
              <Image src="/images/logo.png" alt="Project Fluence logo" width={64} height={64} className="rounded-full object-cover" />
            </button>
          </div>

          <div className="absolute inset-x-0 flex justify-center pointer-events-none">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="pointer-events-auto text-base font-normal hover:underline bg-transparent border-none cursor-pointer"
            >
              <span className="inline md:hidden text-lg">ページトップ</span>
              <span className="hidden md:inline text-xl">ページトップへ - Project Fluence</span>
            </button>
          </div>

          <div className="absolute right-4">
            <Link href="https://note.com/projectfluence" target="_blank" className="ml-auto px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-full shadow-md transform transition-transform duration-200 hover:bg-blue-700 hover:scale-105 active:scale-110 whitespace-nowrap" rel="noopener noreferrer">
              <span className="inline md:hidden">Note</span>
              <span className="hidden md:inline">Noteをフォロー</span>
            </Link>
          </div>
        </div>
      </div>

      <main className="w-full min-h-screen bg-neutral-200 px-1 pt-24 pb-12">
        <div className="max-w-[880px] sm:max-w-3xl md:max-w-7xl mx-auto px-4">
          <section className="bg-white rounded-2xl shadow-lg p-6 md:p-12 grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 min-w-0">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-20 h-20 md:w-28 md:h-28 relative flex-shrink-0">
                  <Image src="/images/logo.png" alt="Project Fluence logo large" fill sizes="(max-width: 768px) 80px, 112px" className="object-cover rounded-xl" />
                </div>

                <div className="min-w-0">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">Project Fluence</h1>
                  <p className="text-sm md:text-base text-gray-600 mt-1">～あなたの未来に、英語の力を～</p>
                </div>
              </div>

              <p className="mt-6 text-base md:text-lg break-words whitespace-normal max-w-full">
                <strong>Project Fluence</strong>は、英語＋専門分野の力で夢を実現する人を増やすことを目指しています。
              </p>

              <p className="text-base md:text-lg mb-1 break-words whitespace-normal max-w-full">
                私（
                <a
                  className="underline"
                  href="https://yutokuroki.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>黒木勇人</strong>
                </a>
                ）が効果的な英語学習法をNoteで紹介し、自ら開発した無料の英語学習アプリも提供します。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#about" className="inline-block bg-blue-800 text-white px-4 py-2 rounded-lg shadow hover:brightness-95">英語学習アプリ</a>
                <a href="#notes" className="inline-block bg-blue-800 text-white px-4 py-2 rounded-lg shadow hover:brightness-95">最近のNote記事</a>
                <a href="#method" className="inline-block bg-blue-800 text-white px-4 py-2 rounded-lg shadow hover:brightness-95">効果的な英語学習方法</a>
              </div>
            </div>

            <div className="md:col-span-1 bg-neutral-100 rounded-xl p-4 shadow-inner w-full min-w-0">
              <h3 className="text-lg uppercase text-gray-700"><strong>プロジェクト創設/開発・運営</strong></h3>

              <div className="mt-4 flex items-center gap-4 min-w-0">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-800 flex-shrink-0">
                  <Image src="/images/profile2.JPG" alt="Yuto Kuroki profile" fill sizes="(max-width: 768px) 64px, 64px" className="object-cover" />
                </div>

                <div className="min-w-0">
                  <Link aria-label="Profile" href="https://yutokuroki.vercel.app" className="font-medium text-lg md:text-2xl block truncate" target="_blank" rel="noopener noreferrer"><strong>黒木勇人</strong></Link>
                  <p className="text-sm text-gray-800 whitespace-normal break-words">早稲田大学 基幹理工学部</p>
                  <p className="text-sm text-gray-800 whitespace-normal break-words">yutokuroki.projectfluence@gmail.com</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-800 whitespace-normal break-words">英語を英語で学ぶ効率的な方法を追求し、中学2年時に英検1級に上位1%のスコアで合格。現在はTOEFL iBT 116/120点, TOEIC満点 990/990点。ドイツ語もネイティブレベル(Goethe Zertifikat C1)を達成。専門は情報工学で、ISEFなどの国際イベントにて研究発表の経験を持つ。</p>

              <div className="mt-3">
                <Link href="https://yutokuroki.vercel.app" className="underline text-lg break-words" target="_blank" rel="noopener noreferrer">→<strong>プロフィール</strong></Link>
                <br/>
                <Link href="https://www.linkedin.com/in/yuto-kuroki-a5b32b383/" className="underline text-lg break-words" target="_blank" rel="noopener noreferrer">→<strong>LinkedIn</strong></Link>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="mt-8 grid md:grid-cols-2 gap-6">
            <article className="bg-white rounded-2xl p-6 shadow">
              <h2 className="text-2xl font-bold">About</h2>
              <div className="flex items-center gap-3"></div>

              <h2 className="mt-2 text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                <p className="text-lg text-gray-700 leading-relaxed mb-1">
                 効率的に英語を学び、世界で活躍する力を身につける。    
                 <br/>
                 <strong>Project Fluence</strong>
                 はそんな学びを応援する個人プロジェクトです。  
                 あなたの未来に、英語の力を。
                 </p>
                <br/>
                ＊大学生が趣味として開発・運営を行っている個人プロジェクトであるため、
                アプリの機能が安定していない可能性があります。ご意見やフィードバックは大歓迎です！
              </h2>
            </article>

            <article className="bg-white rounded-2xl p-6 shadow">
              <h2 className="text-2xl font-semibold mb-4">英語学習アプリ</h2>
              <p className="mt-2 text-neutral-900 text-lg">
                英単語学習アプリ
                <a
                    className="underline"
                    href="https://vocabstream.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <strong>VocabStream</strong>
                </a>
                を近日公開します、お楽しみに！
                <Link href="https://vocabstream.vercel.app" target="_blank"><Image src="/VocabStream.png" alt="Project Fluence logo" width={200} height={200} className="rounded-md object-cover" /></Link>
              </p>
            </article>
          </section>

          {/* Recent Notes */}
          <section id="notes" className="mt-8 bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-bold">最近のNote記事</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              <li>近日公開</li>
              {/* or map note items here */}
            </ul>
          </section>

          {/* なぜ英語を学ぶのか */}
          <section id="english-motivation" className="mt-8 bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-bold">なぜ英語を学ぶのか</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              英語を学ぶことで出会える人や文化、広がる可能性は、学習の努力をはるかに上回る価値を持っています。
              <strong>英語はまさに「一生もののスキル」です。</strong>
              <br />
              中高では成績や受験に、大学では授業や研究に、そして社会人になれば海外とのやり取りや情報収集に大きな力を発揮します。
              翻訳を待たずに世界中の情報にアクセスでき、キャリアや人生の選択肢を大きく広げてくれるのです。
              <strong>これほどリターンの大きい学習分野は他に多くありません。</strong>
              <br />
              もちろん、英語学習は時に大変で、思わず投げ出したくなる瞬間もあるでしょう。
              しかし、コツコツ続けていけば必ず「自分の言葉で伝えられる」日がやってきます。
              そのときの達成感は何ものにも代えがたいはずです。
              そして英語を通じて海外の人とつながれれば、新しい価値観や考え方に触れ、自分の世界も大きく広がっていきます。
            </p>
          </section>

          <section id="method" className="mt-8 bg-white rounded-2xl p-6 shadow"> 
            <h3 className="text-2xl font-semibold mb-2">効果的な英語学習方法
              <p className="text-sm mt-2 font-semibold text-gray-800">
                (＊詳しくは
                <Link href="https://note.com/projectfluence" className="underline text-lg break-words" target="_blank" rel="noopener noreferrer">Note</Link>
                をご覧ください)</p>
            </h3>

            <div className="mb-8">
              <p className="text-gray-900 mb-2">多くの日本人の英語学習には２つの特徴があります。</p>
              <div className="mb-1">
                <p className="text-gray-900"><strong>日英変換</strong>：英単語や英文を日本語に置き換えて理解する方法。多くの単語帳やフラッシュカードはこの仕組みです。</p>
              </div>

              <div className="mb-1">
                <p className="text-gray-900"><strong>文法の論理的理解</strong>：be動詞、否定文、仮定法などを段階的に学び、問題集で繰り返し練習します。</p>
              </div>

              <p className="text-gray-700">これらは試験対策には有効ですが、「学ぶ」と「使えるようになる」は別物です。単語や文法を覚えても、</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>相手の言葉が聞き取れない</li>
                <li>思考が翻訳で遅くなる</li>
                <li>言いたいことが出てこない</li>
              </ul>
              <p className="text-gray-700">
                といった問題が残ります。文法中心だと一語一句を日本語に変換し、文法の正しさを気にしすぎてしまうのです。
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>本質的な英語力</strong>とは、日本語と同じように意味をそのまま理解し、アイデアを直接言葉にできること。
                日本語の文をいちいち分解しないように、英語も自然に理解・発信できる状態が理想です。
              </p>
            </div>

            <div>
              <h5 className="text-2xl font-semibold mb-2">英語を効果的に学ぶ３つの方法</h5>
              <p><strong>＊
                <Link href="https://note.com/projectfluence" className="underline text-lg break-words" target="_blank" rel="noopener noreferrer">Note</Link>
                でさらに詳しくご紹介しています</strong></p>
              <div className="grid mt-2 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-6">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <p className="mt-1 text-xl"><strong>1: 英単語は「英語で」学ぶ</strong></p>
                    <p className="mt-1">英単語を日本語訳で覚えるのではなく、<strong>英語の定義や例文と結びつけて学ぶ</strong>ことをおすすめします。
                     これは、私たちが日本語の知らない単語を国語辞典で調べ、よりやさしい日本語で説明を理解するのと同じ仕組みです。
                      英語の定義や例文と結び付けて学ぶと、以下のような細かい部分が分かるようになるというメリットもあります。
                    </p>
                      <p>・どんな場面で使えるのか</p>
                      <p>・どんな文で自然に使われるのか</p>
                      <p>・細かなニュアンスの違いは何か</p>
                      <p className="mt-1">
                        <br />
                        例：<strong>Perseverence</strong> (忍耐)
                         <br />
                        (定義)&quot;Perseverance means keeping on and not giving up, even when something is hard or takes a long time.&quot;
                         <br />
                         (例文) &quot;She showed great perseverance by practicing the piano every day until she finally mastered the song.&quot;
                         <br />
                         (類義語) Determination, Persistence, Dedication, Endurance
                         <br />
                         (対義語) Giving up, Surrender
                        <br />英英辞書・英英単語帳を使い、この学習方法を実践できます。
                        <br />また、ChatGPTなどの生成AIに以下のように質問することも効果的です。
                        &quot;Can you give me the definition, an example sentence, synonyms, and antonyms for the word (&quot;&quot;)? Please use words that are easier than the word itself to explain.&quot;
                        <br />
                        <br />
                        この学習法を効率化するために、英単語アプリ 
                         <a
                          className="underline"
                          href="https://vocabstream.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                          <strong>VocabStream</strong>
                          </a>
                         を開発中です。お楽しみに！
                      </p>
                  </div>

                  <div className="p-4 bg-gray-100 rounded-lg">
                    <p className="mt-1 text-xl"><strong>2: 英語のインプットを増やす</strong></p>
                    <p className="mt-1">英語力を本質的に伸ばすには、やはり <strong>リアルなインプット</strong> が欠かせません。
                    <br />リスニングには、<strong>「日本語ですでに何度も観たことのあるお気に入りの映画」を英語で視聴する</strong>ことをお勧めしています。
                    <br />リーディングには、<strong>「日本語で読んだことのあるお気に入りの本を英語で読む」</strong>ことをお勧めしています。
                    <br />ストーリーを知っている分、日本語の訳さずに、英語の音声や文と意味を結びつけやすくなります。   
                    </p>
                    <br />
                    <strong>注意点：</strong>
                        <p>・日本語字幕や翻訳に頼らない（結局日英変換の学習になってしまう）</p>
                        <p>・文法を過剰に分析しない（文を丸ごと意味として理解する練習に集中する）</p>
                        <p className="mt-1">
                        <br />通勤・通学時間などを使えば、1日で１時間のインプットとして、1年で200時間以上のインプットが可能です。
                        継続のカギはモチベーションです。
                      </p>
                  </div>
                </div>

                {/* ここでコピー可能な依頼文ブロックを並べる */}
                <div className="p-4 bg-gray-100 rounded-lg space-y-3">
                  <p className="mt-1 text-xl"><strong>3: 生成AIを使ってアウトプットの練習をする</strong></p>
                  <p className="mt-1">アウトプットの経験を積むには、生成AIとスピーキング・ライティングを練習することがおすすめです。
                    <br />特におすすめなのが、<strong>ChatGPTの活用</strong>です。
                    「いつでも・どこでも・好きなだけ」 練習できるのが最大のメリットです。
                    例えば夜の10時、自宅でくつろいでいるときでもスピーキング練習を行うことができます。
                    私もドイツ語をB1からC1に伸ばす際に活用しました。
                    <br />
                    <br />以下の依頼文をコピーして使ってみてください。</p>

                  <div className="grid gap-3">
                    {prompts.map((p, i) => (
                      <CopyablePrompt key={i} label={p.label} text={p.text} />
                    ))}
                  </div>

                  <p className="text-xs text-gray-600 mt-2">＊ボタンは安全なコンテキスト（https）でのみ動作する場合があります。古いブラウザ向けのフォールバックも組み込んでいます。</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-10 text-sm text-gray-700">All content © {new Date().getFullYear()} Project Fluence — 黒木 勇人</footer>
          <Link href="/privacy" target="_blank">Privacy Policy</Link>
        </div>
      </main>
    </>
  );
}
