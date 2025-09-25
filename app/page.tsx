"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import type { Metadata } from "next";

export default function ExtraPage() {
  const scrollToTop = useCallback((e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault?.();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* Sticky Banner */}
      <div className="fixed top-0 left-0 w-full bg-blue-600 text-white py-7 z-50 shadow-md">
        {/* Make the inner content narrower on small screens so the grey background shows at sides */}
        <div className="max-w-[880px] sm:max-w-3xl md:max-w-7xl mx-auto px-4 sm:px-7 relative flex items-center">
          {/* Left: clickable logo that stays on the same page and scrolls to top */}
          <div className="absolute left-4 flex items-center z-50">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center gap-3 focus:outline-none
                        transform transition-transform duration-200 active:scale-105"
            >
              <Image
                src="/images/logo.png"
                alt="Project Fluence logo"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
            </button>
          </div>

          {/* Center: profile button (scroll to top only)
              Use two variants: short on small screens, full on md+ */}
          <div className="absolute inset-x-0 flex justify-center pointer-events-none">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="pointer-events-auto text-base font-normal hover:underline bg-transparent border-none cursor-pointer"
            >
              {/* Short label for small screens */}
              <span className="inline md:hidden text-lg">ページトップへ</span>
              {/* Full label for md and above */}
              <span className="hidden md:inline text-xl">ページトップへ - Project Fluence</span>
            </button>
          </div>

          {/* Right: optional small link */}
          <div className="absolute right-4">
            <Link
              href="https://note.com/projectfluence"
              target="_blank"
              className="ml-auto px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-full shadow-md 
                        transform transition-transform duration-200 hover:bg-blue-700 hover:scale-105 active:scale-110 whitespace-nowrap"
              rel="noopener noreferrer"
            >
              Noteをフォロー
            </Link>
          </div>
        </div>
      </div>

      {/* Main: keep page background neutral so left/right gray shows.
          Narrow the inner wrapper on small screens so visible side gutters remain. */}
      <main className="w-full min-h-screen bg-neutral-200 px-1 pt-24 pb-12">
        <div className="max-w-[880px] sm:max-w-3xl md:max-w-7xl mx-auto px-4">
          {/* Hero */}
          <section className="bg-white rounded-2xl shadow-lg p-6 md:p-12 grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-20 h-20 md:w-28 md:h-28 relative flex-shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Project Fluence logo large"
                    fill
                    sizes="(max-width: 768px) 80px, 112px"
                    className="object-cover rounded-xl"
                  />
                </div>

                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">Project Fluence</h1>
                  <p className="text-sm md:text-base text-gray-600 mt-1">～あなたの未来に、英語の力を～</p>
                </div>
              </div>

              <p className="mt-6 text-base md:text-lg">
                <strong>Project Fluence</strong>は、英語＋専門分野の力で夢を実現する人を増やすことを目指しています。
              </p>
              <p className="text-base md:text-lg mb-1">
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
                <a
                  href="#about"
                  className="inline-block bg-blue-800 text-white px-4 py-2 rounded-lg shadow hover:brightness-95"
                >
                 英語学習アプリ
                </a>
                <a
                  href="#notes"
                  className="inline-block bg-blue-800 text-white px-4 py-2 rounded-lg shadow hover:brightness-95"
                >
                  最近のNote記事
                </a>
                <a
                  href="#method"
                  className="inline-block bg-blue-800 text-white px-4 py-2 rounded-lg shadow hover:brightness-95"
                >
                  効果的な英語学習方法
                </a>
              </div>
            </div>

            <div className="md:col-span-1 bg-neutral-100 rounded-xl p-4 shadow-inner">
              <h3 className="text-lg uppercase text-gray-700"><strong>プロジェクト開発・運営者</strong></h3>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-800">
                  <Image
                    src="/images/profile2.JPG"
                    alt="Yuto Kuroki profile"
                    fill
                    sizes="(max-width: 768px) 64px, 64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <Link
                    aria-label="Scroll to top"
                    href="https://yutokuroki.vercel.app"
                    className="font-medium text-2xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <strong>黒木勇人</strong>
                  </Link>
                  <p className="text-sm text-gray-800">早稲田大学 基幹理工学部 1年</p>
                  <p className="text-sm text-gray-800">yutokuroki.projectfluence@gmail.com</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-800">英語を英語で学ぶ効率的な方法を追求し、中学2年時に英検1級に受験者の上位1%のスコアで合格。
                現在はTOEFL iBT 116/120点, TOEIC満点 990/990点。ドイツ語も自習し、ネイティブレベル(Goethe Zertifikat C1)を達成。
                専門は情報工学で、ISEFなどの国際イベントにて研究発表の経験を持つ。
              </p>
              <div>
                <Link
                  aria-label="Scroll to top"
                  href="https://yutokuroki.vercel.app"
                  className="underline text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  →<strong>プロフィール</strong>
                </Link>
                <br/>
                <Link
                  href="https://www.linkedin.com/in/yuto-kuroki-a5b32b383/"
                  className="underline text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  →<strong>LinkedIn</strong>
                </Link>
              </div>
            </div>
          </section>

          {/* ...rest unchanged... */}
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
                </a>を近日公開します、お楽しみに！
                <Link href="https://vocabstream.vercel.app"><Image src="/VocabStream.png" alt="Project Fluence logo" width={200} height={200} className="rounded-md object-cover" /></Link>
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
                英語は、人生で非常に役立つスキルです。
                活用範囲が広く、効果が長く続くからです。
                中高では成績や受験に、大学では授業・研究に、社会人になれば海外とのやり取りや情報収集に大きな力を発揮します。
                翻訳を待たずに世界の情報にアクセスでき、キャリアアップにもつながります。
            </p>
            <p className="mt-2 text-gray-700 leading-relaxed">
                これほどリターンの大きいスキルは他に多くありません。
              </p>
          </section>

           {/* 英語の学習法について */}
          <section id="method" className="mt-8 bg-white rounded-2xl p-6 shadow"> 
            <h3 className="text-2xl font-semibold mb-2">効果的な英語学習方法
            <p className="text-sm mt-2 font-semibold text-gray-800">(＊詳しくはNoteをご覧ください)</p>
            </h3>

            {/* 上段：日本の英語学習〜本質的な英語力とは */}
            <div className="mb-8">
              <p className="text-gray-900 text-lg mb-2">
                多くの日本人の英語学習には２つの特徴があります。
              </p>

              <div className="mb-1">
                <p className="text-gray-900 text-lg">
                <strong>日英変換</strong>：英単語や英文を日本語に置き換えて理解する方法。多くの単語帳やフラッシュカードはこの仕組みです。
                </p>
              </div>

              <div className="mb-1">
                <p className="text-gray-900 text-lg">
                <strong>文法の論理的理解</strong>：be動詞、否定文、仮定法などを段階的に学び、問題集で繰り返し練習します。
                </p>
              </div>

              <p className="text-gray-700 text-lg">
                これらは試験対策には有効ですが、「学ぶ」と「使えるようになる」は別物です。単語や文法を覚えても、
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-lg">
                <li>相手の言葉が聞き取れない</li>
                <li>思考が翻訳で遅くなる</li>
                <li>言いたいことが出てこない</li>
              </ul>

              <p className="text-gray-700 text-lg">
                といった問題が残ります。文法中心だと一語一句を日本語に変換し、文法の正しさを気にしすぎてしまうのです。
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>本質的な英語力</strong>とは、日本語と同じように意味をそのまま理解し、アイデアを直接言葉にできること。
                日本語の文をいちいち分解しないように、英語も自然に理解・発信できる状態が理想です。
              </p>
            </div>

            {/* 下段：3つの方法を2列配置に変更 */}
            <div>
              <h5 className="text-2xl font-semibold mb-2">英語を効果的に学ぶ３つの方法</h5>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* 左半分：方法1と2を縦に並べる */}
                <div className="flex flex-col gap-6">
                  {/* 方法1 */}
                  <div className="p-4 bg-gray-100 rounded-lg">
                 
                      <p className="mt-1 text-xl">
                      <strong>1: 英単語は「英語で」学ぶ</strong>
                      </p>
                      <p className="mt-1 text-lg">
                        単語を日本語訳で覚えるのではなく、英語の定義や例文と結びつけます。
                        <br />例： comfortable → “A chair is comfortable if it feels nice and soft.”
                        <br />英英辞書や赤シートを活用し、難しい説明は自分で簡単に言い換えると効果的です。
                        <br />この学習法を効率化するために、英単語アプリ 
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

                  {/* 方法2 */}
                  <div className="p-4 bg-gray-100 rounded-lg">
                 
                      <p className="mt-1 text-xl">
                      <strong>2: 英語のインプットを増やす</strong>
                      </p>
                      <p className="mt-1 text-lg">
                        英語の本・記事、映画、YouTube、音楽に毎日触れます。
                        日本語に訳そうとせず、そのまま理解することを意識することがポイントです。
                        <br/>
                        通勤・通学時間などを使えば、1年で200時間以上のインプットが可能です。
                        常に自分より少し上のレベルを選ぶことで成長が早まります。
                        <br/>
                        将来的には、個人のレベルに合わせて教材を推薦するアプリの開発も計画中です！
                      </p>
                    
                  </div>
                </div>

                {/* 右半分：方法3 */}
                <div className="p-4 bg-gray-100 rounded-lg">
                    <p className="mt-1 text-xl">
                    <strong>3: 英語でアウトプットする場をつくる</strong>
                    </p>
                    <p className="mt-1 text-lg">
                      ・ライティング：TOEFLや英検の問題で週１回練習、解答例と比較して表現を学ぶ
                      <br />・スピーキング：ネイティブやAIと会話し、場数を踏む
                      <br />特におすすめなのが、<strong>ChatGPTの活用</strong>です。
                      私もドイツ語をB1からC1に伸ばす際に活用しました。
                      例えば、ChatGPTにこのように質問をしてみてください。
                      <br />「Hi, I want to practice (speaking/writing) English. 
                      Please ask me some questions. 
                      After I answer, give me feedback and then ask another question. 
                      Use words I know, but sometimes a few harder ones so I can learn. 
                      My English level is (A1/A2/B1/B2/C1/C2).」
                      <br /> タイピングで会話を行えばライティング練習、音声モードで会話を行えばスピーキングの練習になります。
                      <br />さらに、目標やレベルに合わせて対話練習を提供するAIアプリ <strong>SpeakwiseGPT</strong> を開発中です。お楽しみに！
                    </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-10 text-sm text-gray-700">
           All content © {new Date().getFullYear()} Project Fluence — 黒木 勇人
          </footer>
          <Link href="/privacy" target="_blank">Privacy Policy</Link>
        </div>
      </main>
    </>
  );
}
