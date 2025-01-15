import React from 'react';
import { Marquee } from './components/Marquee';
import { AuctionLot } from './components/AuctionLot';
import { NewsletterSignUpForm } from './components/NewsletterSignUpForm';
import { PrivateSalesSignUpForm } from './components/PrivateSalesSignUpForm';
import { ExclusiveEvents } from './components/ExclusiveEvents';
import Head from 'next/head';

const marqueeItems = [
  { text: "New Auction: Rare Vintage Watches", link: "#watches", type: 'auction' },
  { text: "Bidding Closes in 2 Hours: Modern Art Collection", link: "#art", type: 'announcement' },
  { text: "Upcoming Event: Fine Jewelry Showcase", link: "#jewelry", type: 'announcement' },
  { text: "Just Added: Limited Edition Prints", link: "#prints", type: 'auction' },
  { text: "Sign Up for Private Sales", link: "#private-sales", type: 'general' },
];

const auctionLots = [
  { id: "1", title: "Vintage Rolex Submariner", description: "A classic 1960s Rolex Submariner in excellent condition.", currentBid: 15000, previousBid: 14500, timeRemaining: "2h 30m", isNew: true },
  { id: "2", title: "Abstract Oil Painting", description: "Large-scale abstract work by renowned contemporary artist.", currentBid: 5000, previousBid: 5200, timeRemaining: "1d 4h", isNew: false },
  { id: "3", title: "First Edition Book Collection", description: "Set of 10 first edition classic novels from the 20th century.", currentBid: 2000, previousBid: 2000, timeRemaining: "6h 15m", isNew: true },
  { id: "4", title: "Art Deco Diamond Necklace", description: "Exquisite diamond necklace from the Art Deco period.", currentBid: 25000, previousBid: 24000, timeRemaining: "3d 12h", isNew: false },
];

const exclusiveEvents = [
  { title: "VIP Art Preview", date: "July 15, 2025", description: "Exclusive preview of upcoming modern art auction." },
  { title: "Collector's Dinner", date: "August 5, 2025", description: "Intimate dinner with renowned collectors and curators." },
];

export default function AuctionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Gumball Auctions - Exclusive Online Bidding</title>
        <meta name="description" content="Discover rare and valuable items at Gumball Auctions. Bid on vintage watches, fine art, rare books, and exquisite jewelry." />
        <meta name="keywords" content="auction, online bidding, vintage watches, fine art, rare books, jewelry" />
      </Head>

      <header className="sticky top-0 z-10">
        <Marquee items={marqueeItems} />
      </header>
      
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center font-sans">Gumball Auctions</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 font-sans">Current Auction Lots</h2>
          {auctionLots.map((lot) => (
            <AuctionLot key={lot.id} {...lot} />
          ))}
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 font-sans">Sign Up for Updates</h2>
          <NewsletterSignUpForm />
        </section>
        
        <section className="mb-12" id="private-sales">
          <h2 className="text-2xl font-semibold mb-4 font-sans">Request Private Sale Access</h2>
          <PrivateSalesSignUpForm />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 font-sans">Exclusive Gumball Events</h2>
          <ExclusiveEvents events={exclusiveEvents} />
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center font-sans">
          <p>&copy; 2025 Gumball Auctions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

