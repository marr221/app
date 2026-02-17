import { useState, useEffect } from 'react'
import { 
  Menu, 
  Home, 
  ShoppingBag, 
  Link2, 
  Phone, 
  Mail, 
  MessageCircle,
  Store,
  Gamepad2,
  Users,
  Zap,
  Crown,
  Shield,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Star,
  Clock,
  Headphones,
  ChevronLeft,
  CheckCircle,
  X,
  Info,
  Grid3X3,
  BookOpen
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  productCategories, 
  otherProducts, 
  formatPrice, 
  getAvailableStock,
  type StockItem,
  type ProductCategory 
} from './data/stock'
import {
  CONTACT_INFO,
  STORE_STORY,
  POPUP_POSTER,
  LAINNYA_POSTERS,
  getCategoryImage,
  getStockImage
} from './data/config'
import './App.css'

type ViewType = 'home' | 'products' | 'product-detail'
type PopupTab = 'menu' | 'lainnya' | 'cerita'

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home')
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [, setIsScrolled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null)
  const [selectedStockItem, setSelectedStockItem] = useState<StockItem | null>(null)
  const [isStockDialogOpen, setIsStockDialogOpen] = useState(false)
  const [popupTab, setPopupTab] = useState<PopupTab>('menu')
  const [selectedPoster, setSelectedPoster] = useState<typeof LAINNYA_POSTERS[0] | null>(null)
  const [isPosterDialogOpen, setIsPosterDialogOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = (message: string = '') => {
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`
    window.open(whatsappUrl, '_blank')
  }

  const handleLinktreeClick = () => {
    window.open(CONTACT_INFO.linktree, '_blank')
  }

  const handleBuyClick = (productName: string) => {
    const message = `Halo ${CONTACT_INFO.storeName}! Saya tertarik membeli ${productName}. Bisa bantu saya?`
    handleWhatsAppClick(message)
  }

  const handleBuyStockItem = (item: StockItem, categoryName: string) => {
    const message = `Halo ${CONTACT_INFO.storeName}! Saya tertarik membeli ${item.name} (${categoryName}) dengan harga ${formatPrice(item.price)}. Apakah masih tersedia?`
    handleWhatsAppClick(message)
    setIsStockDialogOpen(false)
  }

  const handleSellClick = () => {
    const message = `Halo ${CONTACT_INFO.storeName}! Saya ingin menjual sesuatu. Bisa bantu saya?`
    handleWhatsAppClick(message)
  }

  const scrollToSection = (view: ViewType) => {
    setCurrentView(view)
    setIsNavOpen(false)
    setSelectedCategory(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCategoryClick = (category: ProductCategory) => {
    setSelectedCategory(category)
    setCurrentView('product-detail')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToProducts = () => {
    setCurrentView('products')
    setSelectedCategory(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openStockDetail = (item: StockItem) => {
    setSelectedStockItem(item)
    setIsStockDialogOpen(true)
  }

  const openPosterDetail = (poster: typeof LAINNYA_POSTERS[0]) => {
    setSelectedPoster(poster)
    setIsPosterDialogOpen(true)
  }

  // Render icon based on string name
  const renderIcon = (iconName: string, className: string = "w-8 h-8") => {
    switch (iconName) {
      case 'Gamepad2': return <Gamepad2 className={className} />
      case 'TrendingUp': return <TrendingUp className={className} />
      case 'Users': return <Users className={className} />
      case 'Zap': return <Zap className={className} />
      case 'Crown': return <Crown className={className} />
      default: return <Gamepad2 className={className} />
    }
  }

  // Get badge color
  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'red': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'blue': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'green': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'yellow': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'purple': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      default: return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Floating Navigation Button - Always Visible */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => setIsNavOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full p-3 shadow-lg shadow-purple-500/30"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Floating WhatsApp Button - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => handleWhatsAppClick(`Halo ${CONTACT_INFO.storeName}! Saya ingin bertanya tentang produk Anda.`)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg shadow-green-500/30 transition-all hover:scale-110"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>

      {/* Navigation Sheet */}
      <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
        <SheetContent side="right" className="bg-slate-900/95 backdrop-blur-xl border-purple-500/20 w-[350px] p-0">
          {/* Poster at Top */}
          {POPUP_POSTER.image && (
            <div className="relative w-full h-40 overflow-hidden">
              <img 
                src={POPUP_POSTER.image} 
                alt="Poster" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80" />
              {POPUP_POSTER.title && (
                <div className="absolute bottom-2 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{POPUP_POSTER.title}</h3>
                </div>
              )}
            </div>
          )}

          {/* Tab Navigation */}
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setPopupTab('menu')}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                popupTab === 'menu' 
                  ? 'text-purple-400 border-b-2 border-purple-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Menu className="w-4 h-4" />
                Menu
              </div>
            </button>
            <button
              onClick={() => setPopupTab('lainnya')}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                popupTab === 'lainnya' 
                  ? 'text-purple-400 border-b-2 border-purple-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Grid3X3 className="w-4 h-4" />
                Lainnya
              </div>
            </button>
            <button
              onClick={() => setPopupTab('cerita')}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                popupTab === 'cerita' 
                  ? 'text-purple-400 border-b-2 border-purple-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4" />
                Cerita
              </div>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {popupTab === 'menu' && (
              <div className="flex flex-col gap-3">
                <Button
                  variant={currentView === 'home' ? 'default' : 'ghost'}
                  onClick={() => scrollToSection('home')}
                  className={`w-full justify-start gap-3 text-left ${currentView === 'home' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                >
                  <Home className="w-5 h-5" />
                  Home
                </Button>
                <Button
                  variant={currentView === 'products' || currentView === 'product-detail' ? 'default' : 'ghost'}
                  onClick={() => scrollToSection('products')}
                  className={`w-full justify-start gap-3 text-left ${currentView === 'products' || currentView === 'product-detail' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  Produk
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleLinktreeClick}
                  className="w-full justify-start gap-3 text-left text-gray-300 hover:text-white hover:bg-white/10"
                >
                  <Link2 className="w-5 h-5" />
                  Linktree
                </Button>
                <Separator className="my-2 bg-purple-500/20" />
                <Button
                  variant="ghost"
                  onClick={handleSellClick}
                  className="w-full justify-start gap-3 text-left text-green-400 hover:text-green-300 hover:bg-green-500/10"
                >
                  <DollarSign className="w-5 h-5" />
                  Jual
                </Button>
              </div>
            )}

            {popupTab === 'lainnya' && (
              <ScrollArea className="h-[400px]">
                <div className="flex flex-col gap-3">
                  {LAINNYA_POSTERS.length > 0 ? (
                    LAINNYA_POSTERS.map((poster) => (
                      <Card 
                        key={poster.id} 
                        className="bg-white/5 border-white/10 hover:border-purple-500/50 transition-all cursor-pointer overflow-hidden"
                        onClick={() => openPosterDetail(poster)}
                      >
                        {poster.image && (
                          <div className="w-full h-32 overflow-hidden">
                            <img 
                              src={poster.image} 
                              alt={poster.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="text-white font-medium mb-1">{poster.title}</h4>
                              <p className="text-gray-400 text-sm line-clamp-2">{poster.description}</p>
                            </div>
                            {poster.badgeText && (
                              <Badge className={`${getBadgeColor(poster.badgeColor)} shrink-0`}>
                                {poster.badgeText}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-400">
                      <Info className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p>Belum ada poster</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            )}

            {popupTab === 'cerita' && (
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {STORE_STORY.image && (
                    <div className="w-full h-48 rounded-xl overflow-hidden">
                      <img 
                        src={STORE_STORY.image} 
                        alt="Cerita MAR Store" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{STORE_STORY.title}</h3>
                    <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                      {STORE_STORY.content}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            )}
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      {currentView === 'home' && (
        <>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/hero-image.jpg" 
                alt="MAR Store Hero" 
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-purple-900/30 to-slate-900" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 py-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 mb-6">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Trusted by 10,000+ Customers</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  {CONTACT_INFO.storeName}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
                {CONTACT_INFO.tagline}
              </p>
              
              <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Kami menyediakan akun game premium, jasa boosting, akun sosial media berkualitas, 
                dan berbagai layanan digital lainnya dengan harga kompetitif dan pelayanan terbaik.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  onClick={() => setCurrentView('products')}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:scale-105"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Lihat Produk
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={() => handleWhatsAppClick(`Halo ${CONTACT_INFO.storeName}! Saya ingin bertanya tentang produk Anda.`)}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-6 text-lg rounded-xl border border-gray-600 transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {[
                  { value: '10K+', label: 'Pelanggan Puas' },
                  { value: '50K+', label: 'Transaksi' },
                  { value: '4.9/5', label: 'Rating' },
                  { value: '24/7', label: 'Support' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl md:text-3xl font-bold text-purple-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 rounded-full border-2 border-purple-400/50 flex justify-center pt-2">
                <div className="w-1.5 h-3 bg-purple-400 rounded-full" />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Mengapa Memilih <span className="text-purple-400">{CONTACT_INFO.storeName}</span>?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Kami berkomitmen memberikan pelayanan terbaik dengan produk berkualitas dan harga yang bersaing
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Shield className="w-10 h-10 text-green-400" />,
                    title: 'Aman & Terpercaya',
                    description: 'Transaksi aman dengan garansi uang kembali. Akun asli dan berkualitas.'
                  },
                  {
                    icon: <Clock className="w-10 h-10 text-blue-400" />,
                    title: 'Proses Cepat',
                    description: 'Pengiriman akun dan pengerjaan jasa dalam hitungan menit hingga jam.'
                  },
                  {
                    icon: <Headphones className="w-10 h-10 text-purple-400" />,
                    title: 'Support 24/7',
                    description: 'Tim support siap membantu kapan saja Anda butuhkan.'
                  }
                ].map((feature, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 transition-all hover:scale-105">
                    <CardHeader>
                      <div className="mb-4">{feature.icon}</div>
                      <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Apa Kata <span className="text-purple-400">Pelanggan</span>?
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Ahmad R.',
                    role: 'Gamer',
                    text: 'Akun ML yang saya beli sangat memuaskan! Skin lengkap dan rank sesuai deskripsi. Recommended!',
                    rating: 5
                  },
                  {
                    name: 'Siti M.',
                    role: 'Content Creator',
                    text: 'Jasa boost ranknya cepat dan aman. CSnya juga ramah dan responsif. Bakal langganan disini!',
                    rating: 5
                  },
                  {
                    name: 'Budi K.',
                    role: 'Entrepreneur',
                    text: 'Akun IG yang saya beli followersnya aktif semua. Sangat membantu bisnis saya. Terima kasih MAR Store!',
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="pt-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                          {testimonial.name[0]}
                        </div>
                        <div>
                          <div className="text-white font-medium">{testimonial.name}</div>
                          <div className="text-gray-500 text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {currentView === 'products' && (
        /* Products Section */
        <section className="min-h-screen py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Products Header */}
            <div className="relative mb-16 rounded-2xl overflow-hidden">
              <img 
                src="/products-image.jpg" 
                alt="Products" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent flex items-center">
                <div className="p-8 md:p-12">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Semua <span className="text-purple-400">Produk</span>
                  </h1>
                  <p className="text-gray-300 max-w-xl text-lg">
                    Temukan berbagai produk dan layanan digital berkualitas dengan harga terbaik
                  </p>
                </div>
              </div>
            </div>

            {/* Game Accounts Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Gamepad2 className="w-6 h-6 text-purple-400" />
                Akun Game
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productCategories.map((category) => (
                  <Card 
                    key={category.id} 
                    className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 group overflow-hidden cursor-pointer"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {/* Category Image */}
                    <div className="w-full h-40 overflow-hidden">
                      <img 
                        src={getCategoryImage(category.id)} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400">
                          {renderIcon(category.icon, "w-6 h-6")}
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-0">
                          {getAvailableStock(category.id).length} Stok
                        </Badge>
                      </div>
                      <div className="text-sm text-purple-400 mb-1">Akun Game</div>
                      <CardTitle className="text-white text-xl">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{category.description}</p>
                      <div className="text-xl font-bold text-white">{category.priceRange}</div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Lihat Stok
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Other Products Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                Layanan & Jasa
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherProducts.map((product) => (
                  <Card key={product.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 group overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 group-hover:text-white group-hover:from-purple-500 group-hover:to-blue-500 transition-all">
                          {renderIcon(product.icon)}
                        </div>
                        {product.badge && (
                          <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0">
                            {product.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-purple-400 mb-1">{product.category}</div>
                      <CardTitle className="text-white text-lg">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="text-lg font-bold text-white">{product.price}</div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button
                        onClick={() => handleBuyClick(product.name)}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Beli via WhatsApp
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sell CTA */}
            <Card className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-green-500/30">
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Mau Jual Sesuatu?
                  </h3>
                  <p className="text-gray-300">
                    Hubungi kami jika Anda ingin menjual akun, jasa, atau produk digital lainnya
                  </p>
                </div>
                <Button
                  onClick={handleSellClick}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Jual Sekarang
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {currentView === 'product-detail' && selectedCategory && (
        /* Product Detail Section - Stock List */
        <section className="min-h-screen py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Back Button */}
            <Button
              onClick={handleBackToProducts}
              variant="ghost"
              className="mb-6 text-gray-300 hover:text-white hover:bg-white/10"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Kembali ke Produk
            </Button>

            {/* Category Header */}
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img 
                  src={getCategoryImage(selectedCategory.id)} 
                  alt={selectedCategory.name}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                      {renderIcon(selectedCategory.icon, "w-6 h-6 text-white")}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">{selectedCategory.name}</h1>
                  </div>
                  <p className="text-purple-400 text-lg">{selectedCategory.priceRange}</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-2xl">{selectedCategory.description}</p>
            </div>

            {/* Stock Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategory.stock
                .filter(item => item.status === 'available')
                .map((item) => (
                <Card key={item.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 overflow-hidden">
                  {/* Stock Item Image */}
                  {getStockImage(item.id) && (
                    <div className="w-full h-40 overflow-hidden">
                      <img 
                        src={getStockImage(item.id)} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-green-500/20 text-green-400 border-0">
                        Tersedia
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-lg">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{item.details}</p>
                    <div className="text-2xl font-bold text-purple-400">{formatPrice(item.price)}</div>
                  </CardContent>
                  <CardFooter className="pt-0 flex gap-2">
                    <Button
                      onClick={() => openStockDetail(item)}
                      variant="outline"
                      className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
                    >
                      Detail
                    </Button>
                    <Button
                      onClick={() => handleBuyStockItem(item, selectedCategory.name)}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                    >
                      Beli
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {selectedCategory.stock.filter(item => item.status === 'available').length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-2xl font-bold text-white mb-2">Stok Kosong</h3>
                <p className="text-gray-400 mb-6">Maaf, saat ini stok untuk kategori ini sedang kosong.</p>
                <Button
                  onClick={() => handleWhatsAppClick(`Halo ${CONTACT_INFO.storeName}! Saya ingin menanyakan kapan stok tersedia lagi.`)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Tanya via WhatsApp
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Stock Detail Dialog */}
      <Dialog open={isStockDialogOpen} onOpenChange={setIsStockDialogOpen}>
        <DialogContent className="bg-slate-900 border-purple-500/30 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl text-white">{selectedStockItem?.name}</DialogTitle>
            <DialogDescription className="text-gray-400">
              {selectedCategory?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {/* Stock Image in Dialog */}
            {selectedStockItem && getStockImage(selectedStockItem.id) && (
              <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                <img 
                  src={getStockImage(selectedStockItem.id)} 
                  alt={selectedStockItem.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Detail Produk:</h4>
              <p className="text-white">{selectedStockItem?.details}</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <span className="text-gray-400">Harga:</span>
              <span className="text-2xl font-bold text-purple-400">
                {selectedStockItem ? formatPrice(selectedStockItem.price) : '-'}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>Stok tersedia - Siap dikirim</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => setIsStockDialogOpen(false)}
              variant="outline"
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <X className="w-4 h-4 mr-2" />
              Tutup
            </Button>
            <Button
              onClick={() => selectedStockItem && handleBuyStockItem(selectedStockItem, selectedCategory?.name || '')}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Beli via WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Poster Detail Dialog */}
      <Dialog open={isPosterDialogOpen} onOpenChange={setIsPosterDialogOpen}>
        <DialogContent className="bg-slate-900 border-purple-500/30 text-white max-w-lg">
          {selectedPoster && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl text-white">{selectedPoster.title}</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                {selectedPoster.image && (
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                    <img 
                      src={selectedPoster.image} 
                      alt={selectedPoster.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <p className="text-gray-300 mb-4">{selectedPoster.description}</p>
                {selectedPoster.link && (
                  <Button
                    onClick={() => window.open(selectedPoster.link, '_blank')}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  >
                    <Link2 className="w-4 h-4 mr-2" />
                    Kunjungi Link
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Store className="w-8 h-8 text-purple-400" />
                <span className="text-2xl font-bold text-white">{CONTACT_INFO.storeName}</span>
              </div>
              <p className="text-gray-400 mb-4">
                Solusi digital terpercaya untuk kebutuhan gaming dan sosial media Anda.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleLinktreeClick}
                  className="border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
                >
                  <Link2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Menu Cepat</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Produk
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleLinktreeClick}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Linktree
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleSellClick}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Jual
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => handleWhatsAppClick()}
                    className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors w-full text-left"
                  >
                    <Phone className="w-5 h-5" />
                    +62 {CONTACT_INFO.whatsapp.slice(1)}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleWhatsAppClick()}
                    className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors w-full text-left"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Business
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-white/10 mb-8" />

          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2024 {CONTACT_INFO.storeName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
