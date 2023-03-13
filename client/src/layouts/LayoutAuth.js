import React, { Component } from 'react';
 import 'assets/sass/pages/login/login-1.scss';
import SVG from 'react-inlinesvg';
import 'assets/sass/pages/login/login-4.scss';
import { toAbsoluteUrl } from 'helpers';
 import { default as AnimateLoading } from 'components/controls/AnimateLoading';

class LayoutAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
 		};
	}

	componentDidMount() {
		this.setState({ loading: false });
	}

	setLang = (lang) => {
	 
	};

	render() {
		const { loading } = this.state;
		// const style = {
		// 	control: base => ({
		// 		...base,
		// 		border: 0,
		// 		// This line disable the blue border
		// 		boxShadow: "none"
		// 	})
		// };
		if (loading) {
			return (
				<div id='splash-screen' className='kt-splash-screen'>
					<SVG src='/media/logos/mossahamati-logo-dark.svg' alt='Mossahamati' />
					<svg className='splash-spinner' viewBox='0 0 50 50'>
						<circle
							className='path'
							cx='25'
							cy='25'
							r='20'
							fill='none'
							strokeWidth='5'></circle>
					</svg>
				</div>
			);
		}

		const { children, svg, showLogo, routeName, t } = this.props;
		return (
			<>
				<div className='d-flex flex-column flex-root'>
					<AnimateLoading />

					{/*begin::Login*/}
					<div
						className='login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white'
						id='kt_login'>
						{/*begin::Aside in the left*/}
						{/* {routeName !== 'activate-step' &&
							routeName !== 'confirmation-setup' && routeName !== 'welcome' && routeName !== 'upload-files' && (
								<AuthAside svgLink='/media/svg/illustrations/login-visual-1.svg' />
							)} */}
						{/*begin::Aside in the left*/}
						<div className='flex-row' style={{ flex: 1 }}>
							{/* begin::Languages */}
							{routeName === 'sign-in' && (
								<div className="d-flex">
									{/* <Select className='py-7 px-7 primary'
										defaultValue={this.state.countries[0]}
										options={this.state.countries}
										styles={style}
										theme={(theme) => ({
											...theme,
											borderRadius: 0,
											colors: {
												...theme.colors,
												primary25: '#f3f6f9',
												primary: '#131313',
											},
										})}
										getOptionLabel={e => (
											<div style={{ display: 'flex', alignItems: 'center' }}>
												<img
													src={`/media/svg/flags/${e.flag}`}
													className="w-25px h-25px w-lg-28px h-lg-28px rounded-circle mr-5"
													alt={e.label}
												/>
												{e.label}
											</div>
										)}
									/> */}
									 
								</div>
							)}
							{/* end::Languages */}
							{/*begin::Content*/}
							{routeName === 'sign-in' || routeName === 'sign-up' ? (
								<div className='login-content d-flex flex-column justify-content-center position-relative overflow-hidden mx-auto px-10'>
									{/*begin::Content body*/}
									<div className='d-flex flex-column'>{children}</div>
									{/*end::Content body*/}
								</div>
							) : (
								<div
									style={{
										height: '100%',
										width: '100%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										padding: 150,
									}}>
									{/*begin::Content body*/}
									<div className=''>{children}</div>
									{/*end::Content body*/}
								</div>
							)}
							{/*end::Content*/}
						</div>
						{/* begin::Aside */}
						{(routeName === 'activate-step' ||
							routeName === 'confirmation-setup') && (
								<div className='login-aside order-1 order-lg-2 d-flex flex-column'>
									{/*begin::Aside Top*/}
									{showLogo && (
										<div className='d-none d-lg-block d-xl-block'>
											<div className='d-flex flex-column-auto flex-column py-lg-20 py-10'>
												{/*begin::Aside Logo*/}
												<div className='text-center'>
													<SVG
														className='max-h-100px h-85px'
														src={toAbsoluteUrl(
															'/media/logos/mossahamati-logo-dark.svg',
														)}
													/>
												</div>
											</div>
										</div>
									)}
									{/*end::Aside Top*/}
									{/*begin::Aside Bottom*/}
									<div
										className={`aside-img d-flex flex-row-fluid bgi-no-repeat ${svg.indexOf('people.svg') >= 0
											? 'bgi-position-y-top'
											: 'bgi-position-y-center'
											} bgi-position-y-top bgi-position-x-center`}
										style={{
											backgroundImage: `url('${toAbsoluteUrl(svg)}')`,
										}}
									/>
									{/*end::Aside Bottom*/}
								</div>
							)}
						{routeName === 'welcome' && (
							<div className='login-aside d-flex flex-column flex-row-auto' style={{ backgroundColor: "#f5f5f5" }}>
								<div className='d-flex flex-column-auto flex-column pt-lg-20 pt-10'>
									{/*begin::Aside Logo*/}
									<div className='text-center py-lg-10 py-5'>
										<SVG
											className={`h-100px max-h-250px `}
											src={toAbsoluteUrl(
												'/media/logos/mossahamati-logo-dark.svg',
											)}
										/>
									</div>
									<div
										className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center mb-0"
										style={{
											backgroundImage: `url('${toAbsoluteUrl("/media/svg/illustrations/Welcome.svg")}')`,
										}}
									/>
								</div>
							</div>
						)}
						{routeName === "upload-files" && (
							<div className='login-aside d-flex bgi-no-repeat bgi-position-y-bottom bgi-position-x-left' style={{ backgroundColor: "#f5f5f5", overflow: "hidden" }}>
								<div className='d-flex flex-column'>
									{/*begin::Aside Logo*/}
									<div
										className="aside-img d-flex ">
										<SVG
											className={``}
											src={toAbsoluteUrl(
												'/media/svg/illustrations/Security.svg',
											)}
										/>
									</div>
								</div>
							</div>
						)}
						{/* end::Aside */}
					</div>
					{/*end::Login*/}
				</div>
			</>
		);
	}
}

export default  LayoutAuth;
