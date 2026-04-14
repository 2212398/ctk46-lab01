export default function BlogPostLoading() {
 return (
 <div className="animate-pulse">
 <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-6" />

 <article className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-5 bg-white dark:bg-gray-900">
 <div className="flex gap-3">
 <div className="h-5 w-20 bg-emerald-100 dark:bg-emerald-500/20 rounded" />
 <div className="h-5 w-24 bg-gray-100 dark:bg-gray-800 rounded" />
 <div className="h-5 w-28 bg-gray-100 dark:bg-gray-800 rounded" />
 </div>

 <div className="space-y-3">
 <div className="h-9 w-4/5 bg-gray-200 dark:bg-gray-700 rounded" />
 <div className="h-9 w-3/5 bg-gray-200 dark:bg-gray-700 rounded" />
 </div>

 <div className="space-y-2">
 <div className="h-4 w-full bg-gray-100 dark:bg-gray-800 rounded" />
 <div className="h-4 w-full bg-gray-100 dark:bg-gray-800 rounded" />
 <div className="h-4 w-11/12 bg-gray-100 dark:bg-gray-800 rounded" />
 <div className="h-4 w-5/6 bg-gray-100 dark:bg-gray-800 rounded" />
 <div className="h-4 w-2/3 bg-gray-100 dark:bg-gray-800 rounded" />
 </div>
 </article>
 </div>
 );
}

