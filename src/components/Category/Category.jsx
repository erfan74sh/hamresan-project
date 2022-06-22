import React from "react";
import "./style.scss";

const Category = ({ title, children }) => {
	return (
		<section className="category">
			{title && (
				<h2 className="category__title" title={title}>
					{title}
				</h2>
			)}
			<ul className="category__items">{children}</ul>
		</section>
	);
};

export default Category;
