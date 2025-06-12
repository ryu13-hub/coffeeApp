import React, { useState, useEffect } from 'react';
import { Coffee, Search, Heart, Users, Star, Download, Menu, X, MapPin, Award, Zap, Clock, Thermometer, Scale, BookOpen, Timer, Camera } from 'lucide-react';

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
      icon: <BookOpen className="w-8 h-8" />,
      title: "レシピ管理",
      description: "コーヒー豆の種類・産地・焙煎度から抽出方法、分量、温度まで詳細に記録。あなただけのレシピライブラリを構築できます。",
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "高度な検索・フィルタリング",
      description: "豆の産地、抽出方法、焙煎度、抽出時間など多彩な条件でレシピを検索。お気に入りのレシピをすぐに見つけられます。",
      image: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg"
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "抽出タイマー＆ガイド",
      description: "ステップバイステップの抽出ガイドと内蔵タイマーで、完璧な一杯を毎回再現。初心者でも安心して使えます。",
      image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "レシピ共有コミュニティ",
      description: "他のユーザーとレシピを共有し、評価やレビューを交換。世界中のコーヒー愛好家とつながりましょう。",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    }
  ];

  const recipeFeatures = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "精密な分量管理",
      description: "豆の重量、お湯の量を正確に記録"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "温度・時間記録",
      description: "お湯の温度と抽出時間を詳細管理"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "写真付きレシピ",
      description: "完成写真とメモで視覚的に記録"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "お気に入り機能",
      description: "ベストレシピを簡単にアクセス"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "抽出履歴",
      description: "過去の抽出記録を時系列で管理"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "豆の在庫管理",
      description: "手持ちの豆の種類と残量を追跡"
    }
  ];

  const testimonials = [
    {
      name: "田中 さくら",
      role: "ホームバリスタ",
      content: "レシピの詳細記録機能が素晴らしい！同じ味を毎回再現できるようになりました。タイマー機能も抽出中に大活躍です。",
      rating: 5
    },
    {
      name: "佐藤 健太",
      role: "コーヒー初心者",
      content: "ステップバイステップガイドのおかげで、初心者の私でも美味しいコーヒーが淹れられるように。レシピ共有で学ぶことも多いです。",
      rating: 5
    },
    {
      name: "山田 美咲",
      role: "コーヒー愛好家",
      content: "豆の在庫管理から抽出履歴まで、すべてが一つのアプリで完結。こだわり派の私も大満足の機能の充実ぶりです。",
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
              <span className="text-xl font-bold text-gray-900">Coffee Recipe</span>
            </div>
            
            {/* デスクトップナビゲーション */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">機能</a>
              <a href="#recipe-features" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">レシピ機能</a>
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
              <a href="#recipe-features" className="block px-3 py-2 text-gray-700 hover:text-amber-600">レシピ機能</a>
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
                No.1 コーヒーレシピ管理アプリ
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                あなただけの
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">完璧な</span>
                コーヒーレシピを管理
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                豆の種類から抽出方法まで詳細に記録し、お気に入りレシピを管理。タイマー機能とステップガイドで、毎回完璧な一杯を再現できます。初心者からこだわり派まで、すべてのコーヒー愛好家のためのアプリです。
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
                  <span className="ml-3 text-gray-600">3万人以上のユーザー</span>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">4.8評価</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl shadow-2xl p-8">
                  <img 
                    src="https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg" 
                    alt="Coffee Recipe Appプレビュー"
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
              コーヒーレシピ管理に必要なすべて
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              レシピの記録から抽出ガイドまで、完璧なコーヒー体験のためのツールを提供します。
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

      {/* レシピ機能詳細セクション */}
      <section id="recipe-features" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              充実のレシピ管理機能
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              初心者からこだわり派まで、すべてのコーヒー愛好家のニーズに応える機能を搭載
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipeFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center text-amber-600 mb-4">
                  {feature.icon}
                  <h3 className="text-lg font-bold text-gray-900 ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  レシピに記録できる情報
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900">コーヒー豆情報</p>
                      <p className="text-gray-600">種類・産地・焙煎度・購入日・価格</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900">抽出パラメータ</p>
                      <p className="text-gray-600">抽出方法・豆の分量・お湯の温度と量・抽出時間</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900">記録・評価</p>
                      <p className="text-gray-600">完成写真・味の評価・メモ・感想</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg" 
                  alt="レシピ記録画面"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コミュニティセクション */}
      <section id="community" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ユーザーの声
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Coffee Recipeを使用している皆様からの嬉しいお声をご紹介します
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
            完璧なコーヒーレシピ管理を始めませんか？
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            今すぐCoffee Recipeをダウンロードして、あなただけのコーヒーレシピライブラリを構築しましょう。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <Download className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
              iOS版をダウンロード
            </button>
            <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <Download className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
              Android版をダウンロード
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-300">
            <div className="flex items-center justify-center">
              <Clock className="w-4 h-4 mr-2" />
              無料ダウンロード
            </div>
            <div className="flex items-center justify-center">
              <Heart className="w-4 h-4 mr-2" />
              サブスクリプション不要
            </div>
            <div className="flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              45MB
            </div>
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
                <span className="text-xl font-bold">Coffee Recipe</span>
              </div>
              <p className="text-gray-400 max-w-md">
                あなただけのコーヒーレシピを記録し、管理し、共有しましょう。完璧な一杯への道のりをサポートします。
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">機能</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">レシピ管理</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">検索・フィルタ</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">タイマー機能</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">レシピ共有</a></li>
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
            <p>&copy; 2025 Coffee Recipe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;