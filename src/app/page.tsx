'use client'

import { Widget as WidgetType } from "@/config/widgets";
import { widgets } from "@/config/widgets";
import Heading from "@/components/Heading/Heading";
import React from "react";
import Widget from "@/components/Widget/Widget";

export default function Home() {
	const [widgetChanges, setWidgetChanges] = React.useState<{ [key: number]: WidgetType }>({});
	const [activeWidget, setActiveWidget] = React.useState(
		widgets?.find((widget) => widget.active)?.id || null
	);

	const handleWidgetChange = (data: WidgetType, id: number) => {
		if (data.active && data.id !== activeWidget) {
			setActiveWidget(id);
		}

		setWidgetChanges((existingChanges) => ({
			...existingChanges,
			[id]: data,
		}));
	}

	return (
		<main className="p-gutter-small mobile:p-gutter laptop:px-gutter-small desktop:px-gutter laptop:flex flex-col laptop:items-center justify-center">
			<div className="bg-off-white shadow-2xl p-10 laptop:pb-[200px] rounded-lg min-w-[400px]">
				<Heading>Per product widgets</Heading>
				<hr className="border-b-2 border-grey-dark mt-3" />
				<div className="grid grid-cols-1 laptop:grid-cols-3 gap-10 desktop:gap-20 mt-6">
					{
						widgets.map((data) => (
							<Widget
								active={activeWidget === data.id}
								data={{
									...data,
									...(widgetChanges[data.id] ?? {})
								}}
								key={`product-widget-${data.id}`}
								onChange={handleWidgetChange}
							/>
						))
					}
				</div>
			</div>
		</main>
	);
}