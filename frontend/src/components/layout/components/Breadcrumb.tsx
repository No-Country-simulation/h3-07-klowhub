// components/Breadcrumb.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumb = () => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    if (pathname) {
      const linkPath = pathname.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          label: formatBreadcrumb(path),
          path: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [pathname]);

  const formatBreadcrumb = (str: string) => {
    if (!str) return "";

    // Handle query parameters
    const withoutQuery = str.split("?")[0];

    // Convert kebab case or snake case to normal text
    let formatted = withoutQuery.replace(/[-_]/g, " ");

    // Capitalize first letter of each word
    formatted = formatted
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formatted;
  };

  if (!breadcrumbs.length) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className="px-5">
      <ol className="flex items-center space-x-2 text-sm">
        <li className="breadcrumb-item">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => (
          <li
            key={breadcrumb.path}
            className="breadcrumb-item flex items-center"
          >
            <span className="mx-2 text-white">/</span>
            {i === breadcrumbs.length - 1 ? (
              // Last item - current page
              <span className="text-white font-medium">{breadcrumb.label}</span>
            ) : (
              // Clickable breadcrumb
              <Link
                href={breadcrumb.path}
                className="text-gray-500 hover:text-gray-700"
              >
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
