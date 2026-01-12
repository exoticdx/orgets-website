import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';

const ProductSection = ({ title, products, linkTo, variant = 'white' }) => {
    // Show only first 4 products
    const displayProducts = products.slice(0, 4);

    const bgColor = variant === 'alt' ? 'bg-gray-50' : 'bg-white';

    return (
        <section className={`py-20 ${bgColor}`}>
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{title}</h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    </motion.div>

                    <Link to={linkTo} className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group px-4 py-2 rounded-full hover:bg-primary/5">
                        View All
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {displayProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full"
                        >
                            <Link to={`/product/${product.id}`} className="block h-full flex flex-col">
                                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 p-6">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                                    />

                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm tracking-wide uppercase border border-gray-100">
                                        {product.tag}
                                    </div>

                                    {/* Quick action overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5">
                                        <span className="bg-white text-gray-900 px-5 py-2.5 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-sm">
                                            <Eye className="w-4 h-4" /> View Details
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow leading-relaxed">
                                        {product.description}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-primary font-bold text-sm">
                                        <span>View Specifications</span>
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to={linkTo} className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-secondary transition-colors">
                        View All {title}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
