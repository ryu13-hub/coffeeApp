import React, { useState, useEffect } from 'react';
import { Coffee, Search, Heart, Users, Star, Download, Menu, X, MapPin, Award, Zap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "コーヒー豆エクスプローラー",
      description: "世界中のプレミアムコーヒー豆を発見。詳細なテイスティングノート、産地ストーリー、抽出レシピをご提供します。",
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "お気に入りカフェ管理",
      description: "お気に入りのコーヒーショップを保存・整理し、訪問履歴を記録。あの完璧な一杯を忘れることはありません。",
      image: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "パーソナルレコメンド",
      description: "あなたの味覚の好み、抽出方法、コーヒー探索履歴に基づいたAI搭載の個人向け提案をお届けします。",
      image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "コーヒーコミュニティ",
      description: "コーヒー愛好家とつながり、新しい発見をシェアし、世界中のバリスタやロースターから学びましょう。",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    }
  ];

  const testimonials = [
    {
      name: "田中 さくら",
      role: "コーヒー愛好家",
      content: "Coffee Explorerで新しい豆の発見方法が変わりました。レコメンドが本当に的確です！",
      rating: 5
    },
    {
      name: "佐藤 健太",
      role: "カフェオーナー",
      content: "お客様がこのアプリで訪問履歴を記録し、お気に入りのドリンクをシェアするのを楽しんでいます。",
      rating: 5
    },
    {
      name: "山田 美咲",
      role: "ホームバリスタ",
      content: "抽出ガイドと豆のデータベースが非常に詳細で、まるでポケットにコーヒーエキスパートがいるようです。",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* ナビゲーション */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Coffee className="w-8 h-8 text-amber-600" />
              <span className="text-xl font-bold text-gray-900">Coffee Explorer</span>
            </div>
            
            {/* デスクトップナビゲーション */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">機能</a>
              <a href="#community" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">コミュニティ</a>
              <a href="#download" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">ダウンロード</a>
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                今すぐ始める
              </button>
            </div>

            {/* モバイルメニューボタン */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-amber-600">機能</a>
              <a href="#community" className="block px-3 py-2 text-gray-700 hover:text-amber-600">コミュニティ</a>
              <a href="#download" className="block px-3 py-2 text-gray-700 hover:text-amber-600">ダウンロード</a>
              <button className="w-full mt-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full">
                今すぐ始める
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ヒーローセクション */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-orange-900/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg)',
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                No.1 コーヒー発見アプリ
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                あなたの
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">完璧な</span>
                コーヒー体験を発見
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                プレミアムコーヒー豆を探索し、お気に入りのカフェを管理し、コーヒー愛好家のコミュニティとつながりましょう。あなただけのコーヒーアドベンチャーがここから始まります。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <Download className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
                  無料ダウンロード
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-amber-600 hover:text-amber-600 transition-all duration-200">
                  デモを見る
                </button>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="ml-3 text-gray-600">5万人以上のコーヒー愛好家</span>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">4.9評価</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl shadow-2xl p-8">
                  <img 
                    src="https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg" 
                    alt="Coffee Appプレビュー"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 機能セクション */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              あなたのコーヒー体験に必要なすべて
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              新しい豆の発見から仲間との交流まで、Coffee Explorerは必要なツールをすべて提供します。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 space-y-4">
                    <div className="flex items-center text-amber-600 group-hover:text-orange-600 transition-colors duration-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <button className="text-amber-600 font-semibold hover:text-orange-600 transition-colors duration-200 flex items-center group">
                      詳しく見る
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* コミュニティセクション */}
      <section id="community" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              コーヒーコミュニティに参加しよう
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ユーザーの皆様のコーヒー発見と体験についての声をお聞きください。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">「{testimonial.content}」</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"></div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ダウンロードセクション */}
      <section id="download" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Coffee className="w-16 h-16 text-amber-400 mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-4">
            コーヒーアドベンチャーを始める準備はできましたか？
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            今すぐCoffee Explorerをダウンロードして、素晴らしいコーヒー体験の世界を発見しましょう。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <Download className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
              iOS版をダウンロード
            </button>
            <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <Download className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
              Android版をダウンロード
            </button>
          </div>
          
          <div className="mt-12 text-sm text-gray-400">
            無料ダウンロード • サブスクリプション不要 • 50MB
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="w-8 h-8 text-amber-600" />
                <span className="text-xl font-bold">Coffee Explorer</span>
              </div>
              <p className="text-gray-400 max-w-md">
                コーヒーの世界を発見し、探索し、つながりましょう。あなたの完璧な一杯はタップ一つで見つかります。
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">機能</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">豆エクスプローラー</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">カフェ管理</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">レコメンド</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">コミュニティ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">サポート</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">ヘルプセンター</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">利用規約</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Coffee Explorer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;