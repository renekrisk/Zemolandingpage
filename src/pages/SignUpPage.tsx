import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const SignUpPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link to="/" className="flex justify-center mb-6">
                    <img
                        src="/assets/zemo-logo.png"
                        alt="Zemo"
                        className="h-10 w-auto"
                    />
                </Link>
                {/* User didn't specify text here, keeping it clean/none or maybe just Logo is enough */}
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-[600px]">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <Label htmlFor="firstName">First Name</Label>
                                <div className="mt-1">
                                    <Input id="firstName" name="firstName" type="text" required placeholder="Enter first name" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="lastName">Last Name</Label>
                                <div className="mt-1">
                                    <Input id="lastName" name="lastName" type="text" required placeholder="Enter last name" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="businessName">Business Name</Label>
                            <div className="mt-1">
                                <Input id="businessName" name="businessName" type="text" required placeholder="Enter business name" />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="industry">Industry</Label>
                            <div className="mt-1">
                                <select
                                    id="industry"
                                    name="industry"
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="" disabled selected>Select Industry</option>
                                    <option value="tech">Technology</option>
                                    <option value="retail">Retail</option>
                                    <option value="healthcare">Healthcare</option>
                                    <option value="finance">Finance</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <Label htmlFor="employees">Number of Employees</Label>
                                <div className="mt-1">
                                    <select
                                        id="employees"
                                        name="employees"
                                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <option value="" disabled selected>Select Range</option>
                                        <option value="1-10">1-10</option>
                                        <option value="11-50">11-50</option>
                                        <option value="51-200">51-200</option>
                                        <option value="201+">201+</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="expenditure">Monthly Expenditure</Label>
                                <div className="mt-1">
                                    <select
                                        id="expenditure"
                                        name="expenditure"
                                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <option value="" disabled selected>Select Range</option>
                                        <option value="<50k">Less than KES 50,000</option>
                                        <option value="50k-200k">KES 50,000 - 200,000</option>
                                        <option value="200k-1m">KES 200,000 - 1M</option>
                                        <option value="1m+">KES 1M+</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <div className="mt-1">
                                <Input id="phone" name="phone" type="tel" required placeholder="Enter phone number" />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="email">Work Email Address</Label>
                            <div className="mt-1">
                                <Input id="email" name="email" type="email" autoComplete="email" required placeholder="Enter email address" />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="referral">Referral Code</Label>
                            <div className="mt-1">
                                <Input id="referral" name="referral" type="text" placeholder="Enter referral code (optional)" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                                required
                            />
                            <Label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                Read <a href="#" className="font-medium text-orange-600 hover:text-orange-500">terms and conditions</a>
                            </Label>
                        </div>

                        <div>
                            <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                                Sign Up
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">or</span>
                            </div>
                        </div>

                        <div className="mt-6 text-center text-sm">
                            <Link to="/signin" className="font-medium text-orange-600 hover:text-orange-500">
                                Already have an account? Sign In
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-gray-500">
                    <p>© 2025 Melin Software Solutions Limited. All Rights Reserved</p>
                    <p className="mt-1">Version 1.0.4</p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
